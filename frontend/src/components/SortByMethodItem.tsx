import { memo } from 'react';

type SortByMethodItemProps = {
  onClick: () => void;
  option: string;
};

const SortByMethodItem = memo(({ onClick, option }: SortByMethodItemProps) => {
  //
  ////UI
  return (
    <li
      className="relative z-50 cursor-pointer px-6 py-3 font-satoshi hover:bg-slate-200 dark:hover:bg-zinc-900"
      onClick={onClick}
    >
      {option}
    </li>
  );
});

export default SortByMethodItem;
