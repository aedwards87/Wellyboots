export const framerMotionAPI = {
  initial: "initial",
  animate: "animate",
  exit: "exit"
}

export const variants = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  animate: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const animateAPI = {
  custom: direction,
  variants: variants,
  initial: "enter",
  animate: "center",
  exit: "exit",
  transition: {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 }
  },
  drag: "x",
  dragConstraints: { left: 0, right: 0 },
  dragElastic: 1,
  onDragEnd: (e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  }
}