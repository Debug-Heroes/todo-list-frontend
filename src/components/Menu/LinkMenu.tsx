import { LucideProps } from "lucide-react";
import { Link, LinkProps, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
interface ItemMenuProps extends LinkProps {
  Icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}
export function LinkMenu({ Icon, ...rest }: ItemMenuProps) {
  const { pathname } = useLocation()
  return (
    <Link {...rest} className={twMerge("group hover:bg-purple-400 p-2 hover:text-white text-dh-gray-300 rounded-full flex ease-out justify-center duration-100", rest.to === pathname && 'text-white bg-purple-400'
    )}>
      <Icon className="w-full" />
    </Link>
  )
}
