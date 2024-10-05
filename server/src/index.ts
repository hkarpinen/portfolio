import dotenv from 'dotenv'
dotenv.config()

import express, { NextFunction } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { Response } from 'express'
import rateLimit from 'express-rate-limit'
import 'reflect-metadata'
import session from 'express-session'
import { redisSessionConfig } from './config/sessionConfig'
import apiRouter from './routes/apiRoutes'
import sqlConnectionManager from './utils/sqlConnectionManagerUtility'
import { DataTypes } from 'sequelize'

const app = express()
const port = process.env.PORT || 3000

const corsOrigin = process.env.CORS_ORIGIN || '*'

// Setup CORS for all routes.
app.use(
  cors({
    origin: corsOrigin,
  }),
)

app.use(express.json())

app.use(session(redisSessionConfig))

// Setup Rate Limiting.
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})
app.use(limiter)

// Setup Morgan for logging.
app.use(morgan('dev'))

app.use('/api', apiRouter)

/* const openWeatherMapClient = container.get(OpenWeatherMap)
openWeatherMapClient
  .getCurrentWeatherByCityName({
    cityName: 'Boise',
    countryCode: 'US',
  })
  .then((weather) => {
    console.log(weather)
  })
  .catch((err) => {
    console.error(err)
  })*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  console.error('Error:', err)
  res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
