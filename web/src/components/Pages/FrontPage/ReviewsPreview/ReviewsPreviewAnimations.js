export const framerMotionAPI = {
  initial: "initial",
  animate: "animate",
  exit: "exit"
}

// Note: When the X value was at 1000 : -1000, it made the screen jump up the page and 
// the navigation would disappear briefly. Keeping the value lower seems to have fixed it.
export const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 1,
      x: direction < 0 ? 500 : -500,
      opacity: 0
    };
  },
};

export const carouselVariants = {
  variants: variants,
  transition: {
    x: {
      type: "spring", 
      stiffness: 700,
      damping: 200,
    },
    opacity: { duration: 0.2 }
  },
  drag: "x",
  dragConstraints: { left: 0, right: 0 },
  dragElastic: 1,
}


const transition = {
  type: "spring",
  stiffness: 100,
  damping: 50,
};

export const columnVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ...transition,
      staggerChildren: .6
    }
  }
}

export const rowVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition
  }
}

export const buttonContainerVariants = {
  initial: { opacity: 0, scale: .8 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      ...transition,
      duration: .3,
    },
  }
}