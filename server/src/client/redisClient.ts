import { createClient } from 'redis'
import RedisStore from 'connect-redis'
import { getEnvironmentVariable } from '../helpers/envHelpers'

const redisClient = createClient({
  url: getEnvironmentVariable('REDIS_URL'),
})

redisClient.connect().catch((error) => console.log(error))

// Handle Redis client errors
redisClient.on('error', (err) => {
  console.error('Redis error:', err)
})

redisClient.on('connect', () => {
  console.log('Connected to Redis')
})

export const redisStore = new RedisStore({
  client: redisClient,
  prefix: 'myapp:',
})
