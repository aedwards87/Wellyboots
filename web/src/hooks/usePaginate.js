import { useEffect, useState } from 'react'
import { wrap } from 'popmotion';

export const usePaginate = (data, start = 0, timer) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const carouselIndex = wrap(start, data.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Timer to loop through data
  if (timer) {
    useEffect(() => {
      const Timer = setInterval(() => {
        paginate(1)
      }, timer)
      return () => clearInterval(Timer)
    })
  }

  return [page, direction, paginate, carouselIndex, setPage]
}