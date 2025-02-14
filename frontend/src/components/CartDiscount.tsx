import { PriceTag, SubduedText } from '.';

type CartDiscountProps = {
  totalDiscount: number;
  savings: number;
};

const CartDiscount = ({ totalDiscount, savings }: CartDiscountProps) => {
  //
  ////UI
  return (
    <div className="flex justify-between pt-5">
      <SubduedText text="Discount" show discount={totalDiscount} />
      <PriceTag price={'-$' + savings} red />
    </div>
  );
};

export default CartDiscount;
