import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {User} from "@shared/interfaces/userInterfaces";
import axios from "axios";
import {internalApiRequestConfig} from "../config/axiosConfig.ts";

interface AuthProviderProps {
  children: ReactNode
}

interface LoginOptions {
    email: string,
    password: string
}

interface IAuthContext {
  user: User | null,
  loading: boolean,
  login: (options: LoginOptions) => void,
  logout: () => void,
  error: Error | null
}

const initialAuthContext: IAuthContext = {
  user: null,
  loading: false,
  login: () => {},
  logout: () => {},
  error: null
}

export const AuthContext = createContext<IAuthContext>(initialAuthContext)
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const login = (options: LoginOptions) => {
    axios.post('/auth/login', options, internalApiRequestConfig)
    .then(res => setUser(res.data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }

  const logout = () => {
    axios.post('/auth/logout', {}, internalApiRequestConfig)
    .then(() => setUser(null))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }

  const getSession = () => {
    axios.get('/auth/session', internalApiRequestConfig)
    .then(res => setUser(res.data))
    .catch(err => setError(err))
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (!user) {
      getSession();
    }
  }, [user]);

  return (
      <AuthContext.Provider
        value={{
          user,
          loading,
          login,
          logout,
          error
        }}
        >
        {children}
      </AuthContext.Provider>
  )
}

