import { useEffect, useState } from "react";

export function useRandomNumberGenerator(data, page) {
  const [number, setNumber] = useState(0);
  const [lastNumber, setlastNumber] = useState(number);

  useEffect(() => {
    function getRandomInt(max) {
      const result = Math.floor(Math.random() * max)
      if (result === lastNumber) {
        getRandomInt(max)
      }
      setlastNumber(result)
      return result;
    }
    const randomNumber = getRandomInt(data.length * 3);
    setNumber(randomNumber);
  }, [page]);

  return [number]
}