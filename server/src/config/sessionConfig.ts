import { getEnvironmentVariable } from '../helpers/envHelpers'
import { redisStore } from '../client/redisClient'

export const redisSessionConfig = {
  store: redisStore,
  secret: getEnvironmentVariable('SESSION_SECRET'),
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
  },
}
