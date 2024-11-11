import { api } from "@/libs/axios"


interface SignInRequest {
  password: string
  email: string
}


export async function signIn({email, password }: SignInRequest){
  
    const tokenUser = await api.post<string>('/login', {
      email, password
    })
  
    return tokenUser.data

}
