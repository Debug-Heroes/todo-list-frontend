import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<'button'> {
  label: string | ReactNode;
}

export default function Button({ label, ...rest }: ButtonProps) {
  return (
    <button {...rest} className={twMerge('w-full bg-purple-700 text-gray-100 text-sm px-10 py-2 rounded-md shadow-lg transition-all transform duration-150 ease-in-out hover:bg-purple-700/80 focus:outline-none focus:bg-purple-700/80 focus:ring-2 focus:ring-blue-300', rest.className)} >
      {label}
    </button>
  );
};
