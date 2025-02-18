import { useCallback, useState } from 'react';
import { sortingOptions } from '../constants';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { type SortMethod } from '../lib/types';
import { addSortMethod } from '../redux/productsSlice';
import { SortByMenuItem } from '.';

const SortByMenu = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  ////LOGIC
  const handleSortChange = useCallback(
    (option: SortMethod) => {
      setOpen(false);
      dispatch(addSortMethod(option));
    },
    [dispatch],
  );

  ////UI
  return (
    <ul
      className={`absolute right-[-12px] text-lg ${open ? 'block' : 'hidden'} top-[50px] z-10 bg-white text-center ring-1 ring-black`}
    >
      <div className="absolute right-4 top-[-7px] z-40 h-3 w-3 rotate-45 border-l-[1px] border-t-[1px] border-black bg-white" />
      {sortingOptions.map((option) => (
        <SortByMenuItem
          key={option}
          onClick={() => handleSortChange(option)}
          option={option}
        />
      ))}
    </ul>
  );
};

export default SortByMenu;
