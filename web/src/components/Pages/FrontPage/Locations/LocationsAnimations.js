const transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const titleVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
      duration: .3,
    },
  }
}

export const columnVariants = {
  initial: { opacity: 0, y: 80 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ...transition,
      duration: .3,
      delay: .3,
    },
  }
}

export const buttonContainerVariants = {
  initial: { opacity: 0, scale: .8 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transition,
      duration: .6,
      delay: .4
    },
  }
}
