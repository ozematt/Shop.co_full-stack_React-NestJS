import { useCallback, useState } from 'react';
import { addSortMethod } from '../redux/productsSlice';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { sortingOptions } from '../constants';
import { FilterHeader, SortingItem } from '.';
import { filterOpen } from '../redux/filterSlice';
import { SortMethod } from '../lib/types';

const Sorting = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const [open, setOpen] = useState(false); //sorting open/close

  ////LOGIC
  const handleClick = useCallback(
    (option: SortMethod) => {
      dispatch(addSortMethod(option));
      dispatch(filterOpen());
    },
    [dispatch],
  );

  ////UI
  return (
    <>
      <FilterHeader
        title="Sorting"
        onClick={() => {
          setOpen(!open);
        }}
        state={open}
      />
      <div className="pb-6">
        {open &&
          sortingOptions.map((option) => (
            <SortingItem
              key={option}
              onClick={() => handleClick(option)}
              option={option}
            />
          ))}
      </div>
      <hr className="pb-6" />
    </>
  );
};

export default Sorting;
