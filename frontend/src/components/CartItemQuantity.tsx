import { memo } from 'react';
import { minus, plus } from '../assets';

type CartItemQuantityProps = {
  onClickDecrement: () => void;
  onClickIncrement: () => void;
  quantity: number;
};

const CartItemQuantity = memo(
  ({ onClickDecrement, onClickIncrement, quantity }: CartItemQuantityProps) => {
    //
    ////UI
    return (
      <div className="bottom-0 right-[14px] h-full max-h-[31px] w-full max-w-[105px] max-lg:absolute sm:right-[20px] lg:max-h-[44px] lg:max-w-[126px]">
        <button className="flex h-full w-full max-w-[110px] items-center justify-between rounded-full bg-grayBG px-4 font-satoshi font-medium max-md:text-sm md:max-w-[170px] dark:bg-black dark:ring-1 dark:ring-white">
          <img
            src={minus}
            alt="minus"
            width={20}
            height={20}
            onClick={onClickDecrement}
            className="md:scale-75 dark:invert"
          />
          <span className="text-sm lg:text-base">{quantity}</span>
          <img
            src={plus}
            alt="plus"
            width={20}
            height={20}
            onClick={onClickIncrement}
            className="md:scale-75 dark:invert"
          />
        </button>
      </div>
    );
  },
);

export default CartItemQuantity;
