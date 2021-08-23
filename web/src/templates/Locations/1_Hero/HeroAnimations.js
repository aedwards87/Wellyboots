export const carouselVariants = {
  initial: {
    x: '-100%',
    opacity: 0,
    rotate: '-45deg',
    scale: 1.4,
  },
  animate: (number) => {
    return {
      x: '-0%',
      opacity: 1,
      scale: 1,
      rotate: `-${number}deg`,
      transition: {
        delay: 1,
        velocity: 1,
        type: "spring",
        mass: 5,
        stiffness: 140,
        damping: 40,
      },
    }
  },
  exit: {
    x: 0,
    opacity: 0,
    transition: {
      delay: 8
    }
  }
};