import { memo } from 'react';

type SortingItemProps = {
  onClick: () => void;
  option: string;
};

const SortingItem = memo(({ onClick, option }: SortingItemProps) => {
  //
  ////UI
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-between first:pt-6"
    >
      {' '}
      <p className="cursor-pointer pb-2 font-satoshi opacity-60 hover:opacity-100">
        {option}
      </p>
    </div>
  );
});

export default SortingItem;
