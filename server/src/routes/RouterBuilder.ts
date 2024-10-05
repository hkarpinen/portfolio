import { RequestHandler, Router } from 'express'

interface RouteParams {
  path: string
  middleware: RequestHandler[]
  handler: RequestHandler
}

class RouterBuilder {
  private readonly router: Router

  constructor() {
    this.router = Router()
  }

  addGetRoute(params: RouteParams): RouterBuilder {
    this.router.get(params.path, params.middleware, params.handler)
    return this
  }

  addPutRoute(params: RouteParams): RouterBuilder {
    this.router.put(params.path, params.middleware, params.handler)
    return this
  }

  addPostRoute(params: RouteParams): RouterBuilder {
    this.router.post(params.path, params.middleware, params.handler)
    return this
  }

  addDeleteRoute(params: RouteParams): RouterBuilder {
    this.router.delete(params.path, params.middleware, params.handler)
    return this
  }

  build(): Router {
    return this.router
  }
}

export default RouterBuilder
