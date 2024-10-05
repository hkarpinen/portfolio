import { inject, injectable } from 'inversify'
import { User } from '@shared/interfaces/userInterfaces'
import bcrypt from 'bcryptjs'
import { UserRepository } from '../repositories/userRepository'

@injectable()
export class AuthService {
  private userRepository: UserRepository

  constructor(@inject(UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.getLocalUserByEmail(email)
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password)
      if (isMatch) {
        return user
      }
    }
    throw new Error('Invalid credentials')
  }
}
