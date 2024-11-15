import { OpenMenuMobile } from "@/context/OpenMenuMobile"
import { useContext } from "react"

export function useMenuOpen() {
  const { open, setOpen } = useContext(OpenMenuMobile)
  return {
    open, setOpen
  }
}
