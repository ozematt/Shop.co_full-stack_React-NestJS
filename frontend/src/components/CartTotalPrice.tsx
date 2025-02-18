import { memo } from 'react';

type CartTotalPriceProps = {
  subtotal: number;
  savings: number;
};

const CartTotalPrice = memo(({ subtotal, savings }: CartTotalPriceProps) => {
  //
  ////UI
  return (
    <div className="flex justify-between pt-5">
      <p className="font-satoshi text-base sm:text-xl">Total </p>{' '}
      <p className="font-satoshi text-xl font-bold sm:text-2xl">
        ${(subtotal - savings + 15).toFixed(2)}
      </p>
    </div>
  );
});

export default CartTotalPrice;
