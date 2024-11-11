import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface LoadingProps extends ComponentProps<'div'> { }
export function Loading({ ...rest }: LoadingProps) {
  return (
    <div className={twMerge("size-5 mx-auto rounded-full border-r-2 border-b-2 animate-spin bg-transparent border-yellow-200", rest.className)} />
  )
}
