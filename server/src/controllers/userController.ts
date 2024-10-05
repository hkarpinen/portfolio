import { UserService } from '../services/userService'
import { inject, injectable } from 'inversify'
import { Request, Response } from 'express'

@injectable()
export class UserController {
  private userService: UserService

  constructor(@inject(UserService) userService: UserService) {
    this.userService = userService
  }

  async getLocalUserById(req: Request, res: Response) {
    const { id } = req.params
    const user = await this.userService.getLocalUserById(id)
    res.json(user)
  }

  async createLocalUser(req: Request, res: Response) {
    const user = req.body
    try {
      const newUser = await this.userService.createLocalUser(user)
      res.json(newUser)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message })
      }
    }
  }
}
