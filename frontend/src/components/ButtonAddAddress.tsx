import { memo } from 'react';

type ButtonAddAddressProps = {
  onClick: () => void;
};

const ButtonAddAddress = memo(({ onClick }: ButtonAddAddressProps) => {
  //
  ////UI
  return (
    <div
      onClick={onClick}
      className="grid h-[200px] w-[150px] cursor-pointer place-items-center rounded-[20px] font-satoshi text-9xl opacity-30 ring-1 ring-black transition-all hover:scale-95 hover:opacity-70 active:scale-100 dark:ring-white"
    >
      +
    </div>
  );
});

export default ButtonAddAddress;
