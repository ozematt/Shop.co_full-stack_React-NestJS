import { memo } from 'react';

type PaginationButtonProps = {
  onClick: () => void;
  icon: string;
  text: 'Previous' | 'Next';
};

const PaginationButton = memo(
  ({ onClick, icon, text }: PaginationButtonProps) => {
    //
    ////UI
    return (
      <button
        onClick={onClick}
        className={`flex items-center rounded-lg px-[14px] ${text === 'Next' ? 'py-5 md:py-2' : 'py-2'} font-satoshi text-sm font-medium ring-1 ring-black ring-opacity-20 transition duration-200 ease-in-out hover:scale-95 active:scale-105 dark:ring-white`}
      >
        {text === 'Previous' && (
          <img src={icon} alt="arrow left" className="pr-3 dark:invert" />
        )}

        {text}

        {text === 'Next' && (
          <img src={icon} alt="arrow left" className="pl-3 dark:invert" />
        )}
      </button>
    );
  },
);

export default PaginationButton;
