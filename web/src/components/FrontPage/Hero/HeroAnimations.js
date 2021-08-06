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

export const blobVariants = {
  initial: {
    y: '-8.5%',
    // rotate: '-6deg',
    opacity: 0,
  },
  animate: {
    y: '-8.5%',
    scale: [.5, 1.065, 1],
    // rotate: '-6deg',
    opacity: 1,
  },
  transition: {
    duration: 1.6,
    delay: 1.3,
    type: 'spring',
    // mass: 10,
    stiffness: 300,
    // stiffness: 150,
    damping: 20,
    // times: [0, 0.3, 0.45, 0.6, 1],
  }
}