type CartDiscountProps = {
  totalDiscount: number;
  savings: number;
};

const CartDiscount = ({ totalDiscount, savings }: CartDiscountProps) => {
  //
  ////UI
  return (
    <div className="flex justify-between pt-5">
      <p className="font-satoshi text-base opacity-60 sm:text-xl">
        Discount <span>(-{totalDiscount}%)</span>{' '}
      </p>{' '}
      <p className="font-satoshi text-base font-bold text-red-500 sm:text-xl">
        -${savings}
      </p>
    </div>
  );
};

export default CartDiscount;
