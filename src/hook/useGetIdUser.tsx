import { jwtDecode, JwtPayload } from "jwt-decode"
import { useNavigate } from "react-router-dom"

import { toast } from "sonner"

export function useGetIdUser() {
  const token = sessionStorage.getItem("token")
  const navigate = useNavigate()


  if (!token) {
    toast.error("You need to authenticate again.")
    sessionStorage.clear()
    navigate('/sign-in')
    return {
      userId: ''
    }
  }
  try {
    const userId = jwtDecode<JwtPayload>(token)

    if (userId.id) {
      return {
        userId: userId.id
      }
    }


    sessionStorage.clear()
    navigate('/sign-in')
    return {
      userId: ''
    }


  } catch (error) {
    toast.error("You need to authenticate again.")
    sessionStorage.clear()
    navigate('/sign-in')
    return {
      userId: ''
    }
  }


}
