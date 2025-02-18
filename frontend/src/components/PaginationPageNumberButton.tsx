import { memo } from 'react';

type PaginationPageNumberProps = {
  onClick: () => void;
  number: string | number;
  pageNumber: string | number;
};

const PaginationPageNumberButton = memo(
  ({ onClick, number, pageNumber }: PaginationPageNumberProps) => {
    //
    ////UI
    return (
      <button
        onClick={onClick}
        className={` ${number === pageNumber && 'bg-grayBG text-black opacity-100'} ${number === '...' && 'cursor-auto bg-none'} h-[40px] w-[40px] rounded-[8px] font-satoshi text-xs font-medium opacity-50 hover:bg-grayBG hover:opacity-100 md:text-sm dark:hover:text-black`}
      >
        {number}
      </button>
    );
  },
);

export default PaginationPageNumberButton;
