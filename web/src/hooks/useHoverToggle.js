import { useState, useMemo, useCallback } from 'react'

export const useHoverToggle = (state = false) => {
  const [isHovered, setIsHovered] = useState(state)

  const toggle = useCallback(() => {
    setIsHovered((old) => !old);
  }, []);

  const bind = useMemo(() => {
    return {
      onFocus: () => setIsHovered(true),
      onBlur: () => setIsHovered(false),
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    }
  }, [])

  return [isHovered, toggle, bind]
}