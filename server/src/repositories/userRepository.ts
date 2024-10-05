import { injectable } from 'inversify'
import UserModel from '../models/userModel'
import MongoDataAccessLayer from '../data/mongoDataAccessLayer'
import { User } from '@shared/interfaces/userInterfaces'

@injectable()
export class UserRepository {
  private dal: MongoDataAccessLayer<User>

  constructor() {
    this.dal = new MongoDataAccessLayer<User>(UserModel, 'Core')
  }

  async getLocalUserById(id: string): Promise<User | null> {
    return this.dal.getById(id)
  }

  async createLocalUser(localUser: User): Promise<User> {
    return this.dal.createOne(localUser)
  }

  async getLocalUserByEmail(email: string): Promise<User | null> {
    const users = await this.dal.getByQuery({ email })
    if (users.length > 0) {
      return users[0]
    } else {
      throw new Error('User not found')
    }
  }

  async getLocalUserByUsername(username: string): Promise<User | null> {
    const users = await this.dal.getByQuery({ username })
    if (users.length > 0) {
      return users[0]
    } else {
      throw new Error('User not found')
    }
  }
}
