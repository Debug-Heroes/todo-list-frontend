import { ShowMenuMobile } from "@/context/ShowMenuMobile"
import { useContext } from "react"

export function useMenuOpen() {
  const { open, setOpen } = useContext(ShowMenuMobile)
  return {
    open, setOpen
  }
}
