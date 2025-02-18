import { memo } from 'react';

type CartItemTitleProps = {
  title: string;
};

const CartItemTitle = memo(({ title }: CartItemTitleProps) => {
  //
  ////UI
  return (
    <h6 className="font-satoshi text-base font-bold lg:text-xl">{title}</h6>
  );
});

export default CartItemTitle;
