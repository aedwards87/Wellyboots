export const framerMotionAPI = {
  initial: "closed",
  animate: "open",
  exit: "closed"
}

export const HeroHeadingVariants = {
  closed: {
    opacity: 0,
    x: 80,
    transition: {
      duration: .3,
    }
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 50,
      duration: .05,
    }
  },
}
