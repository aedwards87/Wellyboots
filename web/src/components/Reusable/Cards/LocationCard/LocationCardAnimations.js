export const framerMotionAPI = {
  initial: "closed",
  animate: "open",
  exit: "closed"
}

export const LocationCardVariants = {
  closed: {
    opacity: 0,
    y: -80,
    transition: {
      duration: .3,
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 50,
      duration: .05,
    }
  },
}

export const SpanVariants = {
  closed: {
    opacity: 0,
    y: 25,
    // x: '-50%',
    transition: {
      duration: .2,
    }
  },
  open: {
    opacity: 1,
    y: 0,
    // x: '-50%',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 100,
      duration: .2,
      delay: .25,
    }
  },
}

