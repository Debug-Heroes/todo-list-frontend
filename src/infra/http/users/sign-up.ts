import { api } from "@/libs/axios"


interface SignUpRequest {
  name: string
  email: string
  password: string
  confirmPassword: string
}

interface SignUpResponse {
  id: string
  name: string,
  email: string,
}

export async function signUp({name, email, password, confirmPassword }: SignUpRequest){
  
    const user = await api.post<SignUpResponse>('/signup', {
      name, confirmPassword, email, password
    })
  
    return user.data

}
