import { memo } from 'react';

type CartItemPriceProps = {
  purchaseTotal: number;
  price: number;
};

const CartItemPrice = memo(({ purchaseTotal, price }: CartItemPriceProps) => {
  //
  ////UI
  return (
    <p className="font-satoshi text-lg font-bold lg:text-2xl">
      $ {purchaseTotal}{' '}
      <span className="hidden text-sm font-medium opacity-30 lg:block">
        For one: ${price}
      </span>
    </p>
  );
});

export default CartItemPrice;
