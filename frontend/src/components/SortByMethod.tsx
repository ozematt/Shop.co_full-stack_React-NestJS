import { useCallback, useState } from 'react';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { SortMethod } from '../lib/types';
import { addSortMethod } from '../redux/productsSlice';
import { RotatingArrow, SortByMethodMenu } from '.';

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
      <SortByMethodMenu
        open={openSortByMenu}
        onMethodClick={handleSortChange}
      />
    </>
  );
};

export default SortByMethod;
