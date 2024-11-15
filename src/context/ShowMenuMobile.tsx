import { createContext, ReactNode, useState } from "react";

interface ShowMenuMobileProps {
  open: boolean
  setOpen: (open: boolean) => void;
}

export const ShowMenuMobile = createContext({} as ShowMenuMobileProps)


interface ShowMenuMobileProviderProps {
  children: ReactNode
}
export function ShowMenuMobileProvider({ children }: ShowMenuMobileProviderProps) {
  const [open, setOpen] = useState(false)
  return (
    <ShowMenuMobile.Provider value={{
      open, setOpen
    }}>
      {children}
    </ShowMenuMobile.Provider>
  )
}
