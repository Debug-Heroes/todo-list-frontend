import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface TitleOfTypeOfProgressProps extends ComponentProps<'div'> {
  title: string
}
export function TitleOfTypeOfProgress({ title, ...rest }: TitleOfTypeOfProgressProps) {
  return (
    <div className={twMerge("text-violet-600 border-b-2 border-violet-600 py-5 mb-2", rest.className)}>
      <span>{title}</span>
    </div>
  )
}


