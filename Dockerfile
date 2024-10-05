FROM node:20.15.1 as shared
WORKDIR /srv/app
COPY /shared/package*.json ./
RUN npm install
COPY /shared ./shared
WORKDIR /srv/app/shared
RUN npm run build

FROM node:20.15.1 as web
WORKDIR /srv/app
COPY /web/package*.json ./
RUN npm install
COPY /web ./web
COPY --from=shared /srv/app/shared/dist ./shared/dist
WORKDIR /srv/app/web
RUN npm run build

FROM node:20.15.1 as server
WORKDIR /srv/app
ENV NODE_ENV=production
COPY /server/package*.json ./
RUN npm install
COPY /server ./server
COPY --from=shared /srv/app/shared/dist ./shared/dist
WORKDIR /srv/app/server
RUN npm run build

FROM node:20.15.1 as production
WORKDIR /srv/app
RUN mkdir /public
COPY --from=server /srv/app/server/dist ./
COPY --from=server /srv/app/server/package.json ./
COPY --from=server /srv/app/server/package-lock.json ./
RUN npm install --only=production
COPY --from=web /srv/app/web/dist ./public
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "bundle.js"]

