import { useEffect, useState } from "react";
import { debounce } from "../utils/helpers";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const onScroll = (e) => {
    setScrollPosition(e.target.documentElement.scrollTop);
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(onScroll))
    return () => {
      window.removeEventListener("scroll", debounce(onScroll))
    };
  }, []);

  return scrollPosition
}

