import { api } from "@/libs/axios";
import { createContext, ReactNode, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
interface UserAuthContextProps {
  token: string | null
}
export const UserAuthContext = createContext({} as UserAuthContextProps)

interface AuthenticationUserProps {
  children: ReactNode
}
export function AuthVerification({ children }: AuthenticationUserProps) {
  const token = sessionStorage.getItem("token")
  const navigate = useNavigate()
  const { pathname } = useLocation()


  function handleVerifyAuthUser() {
    if ((pathname === '/sign-in' || pathname === '/sign-up') && token) {

      navigate('/')
    }

    if (!token && !(pathname === '/sign-in' || pathname === '/sign-up')) {
      navigate('/sign-in')
    }

    if (token) {
      api.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    }
  }

  useEffect(() => {
    handleVerifyAuthUser()
  }, [token])
  return (
    <UserAuthContext.Provider value={{
      token: token
    }}>
      {children}
    </UserAuthContext.Provider>
  )
}
