import { settings } from '../assets';
import { filterOpen } from '../redux/filterSlice';
import { AppDispatch, useAppDispatch } from '../redux/store';

const FilterSettingsIcon = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  ////UI
  return (
    <img
      src={settings}
      alt="settings"
      width={34}
      height={34}
      onClick={() => dispatch(filterOpen())}
      className="mb-[-3px] ml-5 hidden -rotate-90 cursor-pointer rounded-full bg-grayBG p-[7px] opacity-80 hover:opacity-100 max-xl:block"
    />
  );
};

export default FilterSettingsIcon;
