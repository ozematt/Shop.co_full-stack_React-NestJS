import { useQuery } from '@tanstack/react-query';
import { getCategoryList } from '../api/queries';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { addCategoryName, filterOpen } from '../redux/filterSlice';
import { memo } from 'react';
import { FilterCategoryListItem } from '.';

type FilterCategoryListProps = {
  window?: boolean;
};

const FilterCategoryList = memo(({ window }: FilterCategoryListProps) => {
  //
  ////DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategoryList,
  });

  ////LOGIC
  const handleCategoryClick = (category: string) => {
    navigate(`/shop/${category}`);
    dispatch(addCategoryName(category));
    if (window) dispatch(filterOpen());
  };

  ////UI
  return (
    <>
      {categories?.map((category) => (
        <FilterCategoryListItem
          key={category}
          onClick={() => handleCategoryClick(category)}
          category={category}
        />
      ))}
    </>
  );
});

export default FilterCategoryList;
