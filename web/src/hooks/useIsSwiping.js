import { useState, useMemo } from 'react'

export const useIsSwiping = (state = false) => {
  const [isSwiping, setSwiping] = useState(state);

  const bind = useMemo(() => {
    return {
      onMouseDown: () => setSwiping(false),
      // onMouseUp: () => setSwiping(true),
      // onDragEnd: () => setSwiping(false),
      // onDragStart: () => setSwiping(true),
      // onDrag: () => setSwiping(true),
      // onDragEnd: () => setSwiping(true),
      // onMouseMove: () => setSwiping(true),
      onTouchStart: () => setSwiping(false),
      // onTouchEnd: () => setSwiping(true),
      onTouchMove: () => setSwiping(true),
    }
  }, [])

  return [isSwiping, bind]
}