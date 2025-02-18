import { memo } from 'react';
import { SortByMethodItem } from '.';
import { sortingOptions } from '../constants';
import { SortMethod } from '../lib/types';

type SortByMethodMenuProps = {
  open: boolean;
  onMethodClick: (option: SortMethod) => void;
};

const SortByMethodMenu = memo(
  ({ open, onMethodClick }: SortByMethodMenuProps) => {
    //
    ////UI
    return (
      <ul
        className={`absolute right-[-12px] text-lg ${open ? 'block' : 'hidden'} top-[50px] z-10 bg-white text-center ring-1 ring-black`}
      >
        <div className="absolute right-4 top-[-7px] z-40 h-3 w-3 rotate-45 border-l-[1px] border-t-[1px] border-black bg-white" />
        {sortingOptions.map((option) => (
          <SortByMethodItem
            key={option}
            onClick={() => onMethodClick(option)}
            option={option}
          />
        ))}
      </ul>
    );
  },
);

export default SortByMethodMenu;
