import { discount } from '../assets';

const CartPromoCode = () => {
  //
  ////UI
  return (
    <div className="relative flex w-full pt-6">
      <img
        src={discount}
        alt="discount icon"
        className="absolute left-4 top-[50%] z-10 opacity-40 max-sm:scale-90 dark:invert"
      />
      <input
        type="text"
        placeholder="Add promo code"
        className="h-[48px] w-full rounded-full bg-grayBG pl-[50px] placeholder:opacity-40 focus:outline-none focus:ring-1 focus:ring-black placeholder:max-sm:text-sm dark:bg-zinc-900 dark:focus:ring-white"
      />{' '}
      <button className="ml-[12px] rounded-full bg-black px-[25px] py-[13px] font-satoshi font-medium text-white transition duration-100 ease-in-out hover:scale-95 max-sm:text-sm sm:px-[38px] dark:ring-1 dark:ring-white">
        Apply
      </button>
    </div>
  );
};

export default CartPromoCode;
