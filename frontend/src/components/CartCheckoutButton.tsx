import { arrowWhite } from '../assets';

type CartCheckoutButtonProps = {
  onClick: () => void;
};

const CartCheckoutButton = ({ onClick }: CartCheckoutButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      className="relative mt-6 w-full max-w-[457px] rounded-full bg-black py-[19px] pr-9 font-satoshi font-medium text-white transition duration-100 ease-in-out hover:scale-95 max-sm:text-sm dark:bg-white dark:text-black"
    >
      Go to Checkout{' '}
      <img
        src={arrowWhite}
        alt="white arrow icon"
        className="absolute left-[65%] top-[30%] max-sm:scale-90 sm:left-[60%] sm:top-[32%] dark:invert"
      />
    </button>
  );
};

export default CartCheckoutButton;
