import { useEffect } from 'react';
import { useStore } from '../'

export function useNavMenuToggleContext() {
  const [{ isNavMenuOpen }, setOpen] = useStore()
  let isTouchDevice
  let isSmallScreen
  // Check if device has touch capability
  if (typeof window !== 'undefined') {
    isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    isSmallScreen = window.matchMedia('(max-width: 980px)').matches
  }  

  useEffect(() => {
    const sidenav = document.getElementsByClassName('sidenav')[0]
    const htmlElement = document.getElementsByTagName('html')[0]
    
    if (!isTouchDevice && isNavMenuOpen) {
      // Ensures the elements don't fill the space when the scrollbar
      // is hidden, otherwise elements on the page will fill the
      // space and we get unwanted movement.
      document.body.style.marginRight = '15px'
      if (sidenav) { sidenav.style.marginRight = '15px' }
    } else if (isSmallScreen) {
      document.body.style.marginRight = 0
      if (sidenav) { sidenav.style.marginRight = 0 }
    }
    
    if (isNavMenuOpen) {
      // To stop the page from scrolling whilst the menu is open
      htmlElement.style.overflowY = 'hidden';
    } else {
      htmlElement.style.overflowY = '';
    }
  }, [isTouchDevice, isNavMenuOpen, isSmallScreen]);
  

  const toggle = () => {
    setOpen(old => ({
      ...old,
      isNavMenuOpen: !isNavMenuOpen
    }))
  }

  return [isNavMenuOpen, toggle];
}
