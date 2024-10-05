# Production Builds
This document describes how to build the project for production.

A few things to be aware of:
- The server is built using webpack.
- The client is built using vite's build tool.
  - Once the client is built, it is copied into the `/public` directory of the server and is then served by express.
- The server and client are built separately.
- The server and client share code from the `shared` directory.
- We exclude node_modules from the server build.
  - What this means in practice is on the machine we copy the server package.json into the production container and then run `npm install --production`.

Due to the above, our Dockerfile will make use of multi-stage builds to build the shared code, server, and client separately.

We will also use Docker Compose to create a web service, a database service, and a redis service.

