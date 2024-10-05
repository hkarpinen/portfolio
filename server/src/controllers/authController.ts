import { inject, injectable } from 'inversify'
import { AuthService } from '../services/authService'
import { Request, Response } from 'express'

@injectable()
export class AuthController {
  private authService: AuthService

  constructor(@inject(AuthService) authService: AuthService) {
    this.authService = authService
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body
    try {
      const user = await this.authService.login(email, password)

      req.session.user = {
        username: user.username,
        email: user.email,
        roles: user.roles || ['Member'],
      }
      res.json(req.session.user)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)

        res.status(400).json({ error: error.message })
      }
    }
  }

  async logout(req: Request, res: Response) {
    req.session.destroy((err) => {
      if (err) {
        res.status(400).json({ error: err.message })
      } else {
        res.json({ message: 'Logged out' })
      }
    })
  }
}
