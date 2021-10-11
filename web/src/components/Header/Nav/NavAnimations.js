export const framerMotionAPI = {
  initial: "closed",
  animate: "open",
  exit: "closed"
}

export const ListVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: .3,
      delay: .1
    }
  },
  open: {
    opacity: 1,
    height: '100vh',
    transition: {
      type: 'spring',
      stiffness: 700,
      damping: 200,
      duration: .3,
      staggerChildren: .2,
      delayChildren: .3
    }
  },
}

export const ListItemVariants = {
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      stiffness: 700,
      damping: 200,
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 700,
      damping: 200,
    }
  },
}

export const DropdownVariants = {
  closed: {
    opacity: 0,
    y: 20,
    x: '-45%',
    rotateX: '-30deg',
    transition: {
      ease: 'easeOut',
      duration: .3
    }
  },
  open: {
    opacity: 1,
    y: 0,
    rotateX: '0deg',
    transition: {
      ease: 'easeOut',
      duration: .3
    }
  }
}