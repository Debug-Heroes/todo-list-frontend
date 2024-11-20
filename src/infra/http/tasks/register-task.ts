import { api } from "@/libs/axios"

interface IRegisterTaskRequest {
  name: string
  text: string
  userId: string
}
interface IRegisterTaskResponse {
  id: string
  name: string
  text: string
  user_id: string
}

export async function registerTask(data: IRegisterTaskRequest){
  const { name, text, userId } = data
  const tasks = await api.post<IRegisterTaskResponse>('api/tasks', {
    name, text, userId
  })

  return tasks.data
}
