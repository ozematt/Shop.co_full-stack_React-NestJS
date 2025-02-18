import { Suspense, lazy, useCallback, useState } from 'react';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { SortMethod } from '../lib/types';
import { addSortMethod } from '../redux/productsSlice';
import { RotatingArrow } from '.';

const LazySortByMethodMenu = lazy(() => import('./SortByMethodMenu'));

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
        className="flex cursor-pointer items-center gap-2 pl-2 pt-2 font-satoshi font-bold max-xl:hidden"
      >
        {sortBy}
        <RotatingArrow rotateOn={openSortByMenu} />
      </span>
      <Suspense fallback={<div>Loading...</div>}>
        <LazySortByMethodMenu
          open={openSortByMenu}
          onMethodClick={handleSortChange}
        />
      </Suspense>
    </>
  );
};

export default SortByMethod;
