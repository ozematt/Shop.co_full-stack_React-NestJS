import { memo } from 'react';
import { arrowWhite } from '../assets';

type CartCheckoutButtonProps = {
  onClick: () => void;
};

const CartCheckoutButton = memo(({ onClick }: CartCheckoutButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      className="relative mt-6 w-full max-w-[457px] rounded-full bg-orange-500 py-[19px] pr-9 font-satoshi font-medium text-white ring-1 ring-black ring-opacity-30 transition duration-200 ease-in-out hover:scale-95 max-sm:text-sm dark:ring-white"
    >
      Go to Checkout{' '}
      <img
        src={arrowWhite}
        alt="white arrow icon"
        className="absolute left-[65%] top-[30%] max-sm:scale-90 sm:left-[60%] sm:top-[32%]"
      />
    </button>
  );
});

export default CartCheckoutButton;
