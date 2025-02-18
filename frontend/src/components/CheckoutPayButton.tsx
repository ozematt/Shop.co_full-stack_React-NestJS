import { memo } from 'react';

type CheckoutPayButtonProps = {
  onClick: () => void;
};

const CheckoutPayButton = memo(({ onClick }: CheckoutPayButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      className="mt-6 w-full max-w-[457px] self-center rounded-full bg-orange-500 py-[19px] font-satoshi font-medium text-white ring-1 ring-black ring-opacity-30 transition duration-200 ease-in-out hover:scale-95 max-sm:text-sm dark:text-black dark:ring-white"
    >
      PAY
    </button>
  );
});

export default CheckoutPayButton;
