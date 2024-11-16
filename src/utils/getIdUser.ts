import { jwtDecode, JwtPayload } from "jwt-decode"
import { toast } from "sonner"


export function getIdUser(): string{
  const token = sessionStorage.getItem("token")

  if(!token){
    toast.error("Precisa se autenticar de novo")
    throw new Error('') 
  }
  const userId = jwtDecode<JwtPayload>(token) 

  if(!userId.id){
    toast.error("Precisa se autenticar de novo")
    throw new Error('') 
  }

  return userId.id as string
}
