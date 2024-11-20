import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Button from "../Button/Button";
import { Input } from "../Inputs/Input";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { registerTask } from "@/infra/http/tasks/register-task";
import { toast } from "sonner";
import { useGetIdUser } from "@/hook/useGetIdUser";
import { queryClient } from "@/libs/react-query";
import { IGetAllTasksResponse } from "@/infra/http/tasks/get-all-tasks";


const RegisterTaskSchema = z.object({
  name: z.string(),
  description: z.string(),
})

type IRegisterTask = z.infer<typeof RegisterTaskSchema>
export function AddTask() {
  const [open, setOpen] = useState(false)
  const { userId } = useGetIdUser()

  const { handleSubmit, control, reset } = useForm<IRegisterTask>({
    resolver: zodResolver(RegisterTaskSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  const { mutate } = useMutation({
    mutationFn: (data: IRegisterTask) =>
      registerTask({
        name: data.name,
        text: data.description,
        userId,
      }),
    onSuccess(data, __, ___) {
      toast.success(`Your task has been created`)
      const cached = queryClient.getQueryData<IGetAllTasksResponse[]>(["tasks"])

      if (cached) {
        queryClient.setQueriesData(["tasks"],
          [...cached, {
            ...data
          }],

        )
      }
      reset()
      setOpen(false)
    },
    onError() {
      toast.error(`Something went wrong. Please try again`)
    },

  })

  function handleRegisterTask(data: IRegisterTask) {
    mutate({
      description: data.description,
      name: data.name
    })
  }
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <div>
          <Button className="text-xs" label={'Add New Task +'} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a task</DialogTitle>
          <DialogDescription>
            Create a new task
          </DialogDescription>
        </DialogHeader>
        <form className="mt-2 flex flex-col gap-2" onSubmit={handleSubmit(handleRegisterTask)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  label="Name"
                  id="name"
                  placeholder="Enter the task name"
                  {...field}
                />
              )
            }}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  label="Description"
                  id="description"
                  placeholder="Enter the task description"
                  {...field}
                />
              )
            }}
          />

          <Button className="mt-2 w-max text-xs" label={'Register'} />
        </form>
      </DialogContent>
    </Dialog>
  )
}
