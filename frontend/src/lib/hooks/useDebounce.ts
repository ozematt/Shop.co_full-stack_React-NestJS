import { useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  //
  //DATA
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  ////LOGIC
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return { debouncedValue };
};

export default useDebounce;
