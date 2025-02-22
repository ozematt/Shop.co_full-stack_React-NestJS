import { memo } from 'react';
import { type ButtonProps } from '../lib/types';

const Button = memo(({ children, onClick, type, accent }: ButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      type={type ? type : 'button'}
      className={`mt-6 rounded-full ${accent ? 'bg-orange-500' : 'bg-black'} px-[67px] py-[15px] text-white ring-1 ring-white transition duration-200 ease-in-out hover:scale-95 max-sm:w-full sm:mt-[32px]`}
    >
      {children}
    </button>
  );
});

export default Button;
