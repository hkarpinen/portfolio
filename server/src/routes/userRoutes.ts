import RouterBuilder from './RouterBuilder'
import { container } from '../di-container'
import { UserController } from '../controllers/userController'
import {
  validateRequestBodyAgainstJoiSchema,
} from '../middleware/validationMiddleware'
import {
  userPostRequestJoiSchema,
} from '../validators/userValidators'

const userController = container.get(UserController)

const router = new RouterBuilder()
  .addGetRoute({
    path: '/users/:id',
    middleware: [],
    handler: (req, res) => userController.getLocalUserById(req, res),
  })
  .addPostRoute({
    path: '/users',
    middleware: [validateRequestBodyAgainstJoiSchema(userPostRequestJoiSchema)],
    handler: (req, res) => userController.createLocalUser(req, res),
  })
  .build()

export default router
