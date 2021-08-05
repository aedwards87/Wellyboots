export const staggerVariants = {
  animate: {
    transition: {
      staggerChildren: .3
    }
  }
}


export const headingVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 4,
      stiffness: 100,
      damping: 40,
      delay: .2
    }
  }
}

export const textVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 4,
      stiffness: 100,
      damping: 40,
      delay: .4
    }
  }
}

export const buttonVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 4,
      stiffness: 100,
      damping: 40,
      delay: .6
    }
  }
}

export const svgVariants = {
  initial: {
    // y: '-46%',
    rotate: '-6deg',
    opacity: 0,
  },
  animate: {
    scale: [.5, 1.065, 1],
    rotate: '-6deg',
    opacity: 1,
  },
  transition: {
    duration: 1,
    delay: 1,
    type: 'spring',
    mass: 6,
    stiffness: 150,
    damping: 20,
    times: [0, 0.3, 0.45, 0.6, 1],
  }
}