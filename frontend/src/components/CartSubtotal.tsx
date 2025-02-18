import { memo } from 'react';
import { PriceTag, SubduedText } from '.';

const CartSubtotal = memo(({ subtotal }: { subtotal: number }) => {
  return (
    <div className="flex justify-between pt-5">
      <SubduedText text="Subtotal" />
      <PriceTag price={'$' + subtotal} />
    </div>
  );
});

export default CartSubtotal;
