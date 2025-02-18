import { memo } from 'react';

type FilterApplyButtonProps = {
  onClick: () => void;
};

const FilterApplyButton = memo(({ onClick }: FilterApplyButtonProps) => {
  //
  ////UI
  return (
    <button
      onClick={onClick}
      className="w-full rounded-full bg-black px-[86px] py-[15px] text-[14px] text-white transition duration-100 ease-in-out hover:scale-95 dark:bg-white dark:text-black"
    >
      Apply Filter
    </button>
  );
});

export default FilterApplyButton;
