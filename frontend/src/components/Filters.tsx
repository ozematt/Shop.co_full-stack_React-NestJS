import { useCallback, useState } from 'react';
import { FilterHeader, FiltersCategory, FiltersPrice, Sorting } from './';

type FiltersProps = {
  iconHide?: boolean;
  sortOptions?: boolean;
  window?: boolean;
};

const Filters = ({ iconHide, sortOptions, window }: FiltersProps) => {
  //
  ////DATA
  const [openFilters, setOpenFilters] = useState(false);

  ////LOGIC
  //open/close all filters
  const handleFiltersOpen = useCallback(() => {
    if (openFilters) return setOpenFilters(false);
    setOpenFilters(true);
  }, [openFilters]);

  //UI
  return (
    <div className="rounded-[20px] px-6 pb-6 pt-[20px] ring-1 ring-black ring-opacity-20 dark:bg-zinc-900">
      <FilterHeader
        title="Filters"
        onClick={handleFiltersOpen}
        state
        main
        iconHide={iconHide}
      />

      <hr className="mt-4 pb-6" />
      {sortOptions && <Sorting />}
      <FiltersCategory toggle={openFilters} window={window} />
      <hr className="pb-6" />
      <FiltersPrice toggle={openFilters} window={window} />
    </div>
  );
};

export default Filters;
