import { useSelector } from 'react-redux';
import { CloseButton, Filters, Overlay } from '.';
import { filterOpen } from '../redux/filterSlice';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';

const FilterWindow = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const open = useSelector((state: RootState) => state.filter.filterOpen);

  ////UI
  return (
    <>
      {' '}
      <div
        className={`absolute top-[-70px] ${open ? 'block' : 'hidden'} z-20 w-full rounded-2xl bg-white dark:bg-black`}
      >
        <div className="absolute right-5 top-7">
          <CloseButton onClick={() => dispatch(filterOpen())} />
        </div>
        <Filters window iconHide sortOptions />
      </div>
      <Overlay onClick={() => dispatch(filterOpen())} open={open} />
    </>
  );
};

export default FilterWindow;
