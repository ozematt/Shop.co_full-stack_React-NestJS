import { useCallback, useState } from 'react';
import { type UseQuantityProps } from '../types';

const useQuantity = ({ stock }: UseQuantityProps) => {
  //
  ////DATA
  const [quantity, setQuantity] = useState(1);

  ////LOGIC
  const handleQuantityIncrement = useCallback(() => {
    setQuantity((prev) => (prev < stock ? prev + 1 : prev));
  }, [quantity]);
  const handleQuantityDecrement = useCallback(() => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }, [quantity]);

  return {
    quantity,
    setQuantity,
    handleQuantityIncrement,
    handleQuantityDecrement,
  };
};

export default useQuantity;
