import { useStore } from '../'

export function useNavMenuToggleContext() {
  const [{ isNavMenuOpen }, setOpen] = useStore()

  const toggle = () => {
    setOpen(old => ({
      ...old,
      isNavMenuOpen: !isNavMenuOpen
    }))
  }

  return [isNavMenuOpen, toggle];
}
