import { useState, useLayoutEffect, useCallback } from 'react'

const useIntersection = (ref, rootMargin) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleObserve = useCallback(
    (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    }, []
  );

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    let observer = new IntersectionObserver(
      (entries) => {
        handleObserve(entries)
      }, { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      // observer.unobserve(ref)
      observer.disconnect();
      observer = null;
    };

  }, [ref]);

  return isVisible;
};

export default useIntersection
