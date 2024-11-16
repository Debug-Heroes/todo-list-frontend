import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import Button from "../Button/Button";
import { Input } from "../Inputs/Input";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "react-query";
import { registerTask } from "@/infra/http/tasks/register-task";
import { getIdUser } from "@/utils/getIdUser";
import { toast } from "sonner";

const RegisterTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
})

type IRegisterTask = z.infer<typeof RegisterTaskSchema>
export function AddTask() {
  const [open, setOpen] = useState(false)
  const { handleSubmit, control, reset } = useForm<IRegisterTask>({
    resolver: zodResolver(RegisterTaskSchema),
    defaultValues: {
      title: '',
      description: ''
    }
  })

  const { mutate } = useMutation({
    mutationFn: (data: IRegisterTask) =>
      registerTask({
        name: data.title,
        text: data.description,
        userId: getIdUser()
      }),
    onSuccess(data, variables, context) {
      toast.success(`Sua task ${data.name} foi criada`)
      reset()
    },
    onError(error, variables, context) {
      toast.error(`Algo deu errado`)
    },

  })

  function handleRegisterTask(data: IRegisterTask) {
    mutate({
      description: data.description,
      title: data.title
    })
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          <Button className="text-xs" label={'Add New Task +'} />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adiciona uma task</DialogTitle>
          <DialogDescription>
            Faça um cadastro de uma nova task
          </DialogDescription>
        </DialogHeader>
        <form className="mt-2 flex flex-col gap-2" onSubmit={handleSubmit(handleRegisterTask)}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  label="Title"
                  id="title"
                  placeholder="Digite o titulo"
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
                  placeholder="Digite o description"
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
