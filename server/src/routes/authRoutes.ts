import { container } from '../di-container'
import { AuthController } from '../controllers/authController'
import RouterBuilder from './RouterBuilder'

const authController = container.get(AuthController)

const router = new RouterBuilder()
  .addPostRoute({
    path: '/auth/login',
    middleware: [],
    handler: (req, res) => authController.login(req, res),
  })
  .addPostRoute({
    path: '/auth/logout',
    middleware: [],
    handler: (req, res) => authController.logout(req, res),
  })
  .addGetRoute({
    path: '/auth/session',
    middleware: [],
    handler: (req, res) => {
      res.json(req.session.user)
    },
  })
  .build()

export default router
