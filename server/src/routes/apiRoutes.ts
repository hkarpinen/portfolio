import { Router } from 'express'
import authRouter from './authRoutes'
import userRouter from './userRoutes'
import weatherRouter from './weatherRoutes'

const router = Router()

router.use(authRouter)
router.use(userRouter)
router.use(weatherRouter)

export default router
