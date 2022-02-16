import { useEffect } from 'react';
import { useStore } from '../'

export function useNavMenuToggleContext() {
  const [{ isNavMenuOpen }, setOpen] = useStore()
  // Check if device has touch capability
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches

  useEffect(() => {
    if (!isTouchDevice && isNavMenuOpen) {
      // Ensures the elements don't fill the space when the scrollbar
      // is hidden, otherwise elements on the page will fill the
      // space and we get unwanted movement.
      document.body.style.marginRight = '15px';
      document.getElementsByClassName('sidenav')[0].style.marginRight = '15px';
      document.getElementsByClassName('nav-list')[0].style.paddingLeft = 0;
    } else {
      document.body.style.marginRight = 0;
      if (document.getElementsByClassName('sidenav')[0]) {
        document.getElementsByClassName('sidenav')[0].style.marginRight = 0
      }
      if (document.getElementsByClassName('nav-list')[0]) {
        document.getElementsByClassName('nav-list')[0].style.paddingLeft = 'calc(100vw - 100%)';
      }
    }
    
    if (isNavMenuOpen) {
      // To stop the page from scrolling whilst the menu is open
      document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
    } else {
      document.getElementsByTagName('html')[0].style.overflowY = '';
    }
  }, [isTouchDevice, isNavMenuOpen]);
  

  const toggle = () => {
    setOpen(old => ({
      ...old,
      isNavMenuOpen: !isNavMenuOpen
    }))
  }

  return [isNavMenuOpen, toggle];
}
