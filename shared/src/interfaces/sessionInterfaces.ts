export interface ISessionData {
  views?: number
  user?: {
    username: string,
    email: string,
    roles: string[]
  }
}