import { api } from "@/libs/axios"

interface IGetAllTasksRequest {

}
export interface IGetAllTasksResponse {
  id: string
  name: string
  text: string
  user_id: string
}

export async function getAllTasks({}: IGetAllTasksRequest){
  const tasks = await api.get<IGetAllTasksResponse[]>('api/tasks')

  return tasks.data
}
