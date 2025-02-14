import { useState } from 'react';
import { addSortMethod } from '../redux/productsSlice';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { sortingOptions } from '../constants';
import { FilterHeader } from '.';
import { filterOpen } from '../redux/filterSlice';
import { SortMethod } from '../lib/types';

const Sorting = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const [open, setOpen] = useState(false); //sorting open/close

  const handleClick = (option: SortMethod) => {
    dispatch(addSortMethod(option));
    dispatch(filterOpen());
  };

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
            <div
              key={option}
              onClick={() => handleClick(option)}
              className="flex items-center justify-between first:pt-6"
            >
              {' '}
              <p className="cursor-pointer pb-2 font-satoshi opacity-60 hover:opacity-100">
                {option}
              </p>
            </div>
          ))}
      </div>
      <hr className="pb-6" />
    </>
  );
};

export default Sorting;
