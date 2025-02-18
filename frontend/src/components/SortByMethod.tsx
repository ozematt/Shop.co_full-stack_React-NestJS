import { useCallback, useState } from 'react';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { sortingOptions } from '../constants';
import { SortMethod } from '../lib/types';
import { addSortMethod } from '../redux/productsSlice';
import { RotatingArrow, SortByMethodItem } from '.';

const SortByMethod = () => {
  //
  //DATA
  const dispatch: AppDispatch = useAppDispatch();
  const [openSortByMenu, setOpenSortByMenu] = useState(false);
  const [sortBy, setSortBy] = useState('Alphabetical');

  ////LOGIC
  const handleSortChange = useCallback(
    (option: SortMethod) => {
      setSortBy(option);
      setOpenSortByMenu(false);
      dispatch(addSortMethod(option));
    },
    [dispatch],
  );

  ////UI
  return (
    <>
      <span
        onClick={() => setOpenSortByMenu(!openSortByMenu)}
        className="flex cursor-pointer items-center pl-2 pt-2 font-satoshi font-bold max-xl:hidden"
      >
        {sortBy}
        <RotatingArrow rotateOn={openSortByMenu} />
      </span>
      {/* drop down menu */}
      <ul
        className={`absolute right-[-12px] text-lg ${openSortByMenu ? 'block' : 'hidden'} top-[50px] z-10 bg-white text-center ring-1 ring-black`}
      >
        <div className="absolute right-4 top-[-7px] z-40 h-3 w-3 rotate-45 border-l-[1px] border-t-[1px] border-black bg-white" />
        {sortingOptions.map((option) => (
          <SortByMethodItem
            key={option}
            onClick={() => handleSortChange(option)}
            option={option}
          />
        ))}
      </ul>
    </>
  );
};

export default SortByMethod;
