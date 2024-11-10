import { Eye, EyeClosed } from "lucide-react";
import { ComponentProps, forwardRef, useState } from "react";

interface InputPasswordWithIconProps extends ComponentProps<'input'> {
  title: string
}
export const InputPasswordWithIcon = forwardRef<HTMLInputElement, InputPasswordWithIconProps>(({ title, itemRef, ...rest }, ref) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false)

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={title}>{title}</label>
      <div className="flex justify-between rounded-sm items-center bg-white gap-2">
        <input className="flex-1 rounded-sm p-2 bg-transparent" id={title} type={isVisiblePassword ? "text" : "password"} {...rest} ref={ref} />
        {isVisiblePassword && <EyeClosed className="mr-2 cursor-pointer" onClick={() => setIsVisiblePassword(!isVisiblePassword)} />}
        {!isVisiblePassword && <Eye className="mr-2 cursor-pointer" onClick={() => setIsVisiblePassword(!isVisiblePassword)} />}

      </div>
    </div>
  )
})
