import { useState, useCallback, useEffect } from 'react';

export function useToggle(initialValue = false, fullscreen) {
  const [value, setValue] = useState(initialValue);
  const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches

  useEffect(() => {
    const sidenavElement = document.getElementsByClassName('sidenav')[0]
    const htmlElement = document.getElementsByTagName('html')[0]
    if (value && fullscreen)  {
      // To stop the page from scrolling whilst menu is open
      htmlElement.style.overflowY = 'hidden';
      // Allows users to scroll through the list in the menu
      if (sidenavElement) { sidenavElement.style.overflowY = 'scroll' }
    } else {
      htmlElement.style.overflowY = ''
      if (sidenavElement) { sidenavElement.style.overflowY = '' }
    }
    // Ensures the elements don't fill the space when the scrollbar
    // is hidden, otherwise elements on the page will fill the
    // space and we get unwanted movement.
    if (!isTouchDevice && (value && fullscreen)) {
      document.body.style.marginRight = '15px';
    } else {
      document.body.style.marginRight = 0;
    }
    
  }, [isTouchDevice, value]);
  

  const toggle = useCallback(() => {
    setValue((old) => !old);
  }, []);

  return [value, toggle];
}
