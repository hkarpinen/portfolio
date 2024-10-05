import { inject, injectable } from 'inversify'
import { UserRepository } from '../repositories/userRepository'
import { User } from '@shared/interfaces/userInterfaces'

@injectable()
export class UserService {
  private userRepository: UserRepository

  constructor(@inject(UserRepository) userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async getLocalUserById(id: string) {
    return this.userRepository.getLocalUserById(id)
  }

  async createLocalUser(localUser: User) {
    return this.userRepository.createLocalUser(localUser)
  }
}
