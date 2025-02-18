import { memo } from 'react';

type SearchEngineItemProps = {
  onClick: () => void;
  title: string;
};

const SearchEngineItem = memo(({ onClick, title }: SearchEngineItemProps) => {
  //
  ////UI
  return (
    <li
      onClick={onClick}
      className="cursor-pointer px-9 py-2 hover:bg-grayBG hover:brightness-110 dark:hover:bg-zinc-600"
    >
      {title}
    </li>
  );
});

export default SearchEngineItem;
