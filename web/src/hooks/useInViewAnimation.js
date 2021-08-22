import { useAnimation } from "framer-motion";
import React, { useLayoutEffect, useState } from "react";
import { useInView, InView } from "react-intersection-observer";
export const useInViewAnimation = (threshold = 0) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, inView, controls }
}

export const InViewAnimation = ({ Component, className, ...props }) => {
  const controls = useAnimation();
  const [isInView, setInView] = useState()

  return (
    <InView>
      {({ inView, ref }) =>
        <Title
          className={className}
          ref={ref}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          {...props}
        >
          {children}
        </Title>
      }
    </InView>
  )
}


