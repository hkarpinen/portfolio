export interface User {
  username: string
  email: string
  password: string
  createdAt?: Date
  updatedAt?: Date,
  roles?: string[]
}