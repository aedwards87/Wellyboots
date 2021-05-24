import { useState, useMemo, useCallback } from 'react'

export const useNavToggle = () => {
  const [isHovered, setIsHovered] = useState(false)
  // console.log({ isHovered });

  const toggle = useCallback(() => {
    setIsHovered((old) => !old);
  }, []);

  const bind = useMemo(() => {
    return {
      onFocus: () => setIsHovered(true),
      onBlur: () => setIsHovered(false),
      onMouseOver: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false)
    }
  }, [])

  return [isHovered, toggle, bind]
}