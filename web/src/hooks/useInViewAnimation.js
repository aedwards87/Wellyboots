import { useAnimation } from "framer-motion";
import { useLayoutEffect } from "react";
import { useInView } from "react-intersection-observer";
export const useInViewAnimation = ({ threshold = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold
  });

  useLayoutEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, inView, controls }
}
