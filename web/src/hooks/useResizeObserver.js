import React, { useRef, useState, useLayoutEffect, useCallback } from 'react'
// import ResizeObserver from "resize-observer-polyfill";


export const useResizeObserver = (ref) => {
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const handleResize = useCallback(
    (entries) => {
      const entry = entries[0];
      setWidth(entry.contentRect.width);
      setHeight(entry.contentRect.height);
    }, []
  );

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    let resizeObserver = new ResizeObserver((entries) =>
      handleResize(entries)
    );
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
      resizeObserver = null;
    };
  }, [ref]);

  return [width, height];
};