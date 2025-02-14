type CheckoutPayButtonProps = {
  onClick: () => void;
};

const CheckoutPayButton = ({ onClick }: CheckoutPayButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      className="mt-6 w-full max-w-[457px] rounded-full bg-black py-[19px] font-satoshi font-medium text-white transition duration-100 ease-in-out hover:scale-95 max-sm:text-sm dark:bg-white dark:text-black"
    >
      PAY
    </button>
  );
};

export default CheckoutPayButton;
