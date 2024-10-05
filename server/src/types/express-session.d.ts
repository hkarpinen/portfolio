import 'express-session'
import { ISessionData } from '../../../shared/src/interfaces/sessionInterfaces'

declare module 'express-session' {
  interface SessionData extends ISessionData {}
}
