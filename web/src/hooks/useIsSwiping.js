import { useState, useMemo } from 'react'

export const useIsSwiping = (state = false) => {
  const [isSwiping, setSwiping] = useState(state);

  const bind = useMemo(() => {
    return {
      onMouseDown: () => setSwiping(false),
      onMouseMove: () => setSwiping(true),
      onTouchStart: () => setSwiping(false),
      onTouchMove: () => setSwiping(true),
    }
  }, [])

  return [isSwiping, bind]
}