const transition = {
  type: "spring",
  stiffness: 100,
  damping: 50,
};

export const rowVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ...transition,
      staggerChildren: .5
    }
  }
}

export const columnVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition
  }
}

export const linkContainerVariants = {
  initial: {
    opacity: 0,
    // scale: .8 
  },
  animate: {
    // scale: 1,
    opacity: 1,
    transition: {
      ...transition,
      duration: .3,
    },
  }
}