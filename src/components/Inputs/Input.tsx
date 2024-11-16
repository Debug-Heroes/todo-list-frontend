import { ComponentProps, forwardRef } from "react"

interface InputProps extends ComponentProps<'input'> {
  label: string
}


export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, itemRef, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={rest.id}>{label}</label>
      <input {...rest} className="rounded-sm p-2" id={rest.id} ref={ref} />
    </div>
  )
})
