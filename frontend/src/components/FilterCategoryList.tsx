import { useQuery } from '@tanstack/react-query';
import { getCategoryList } from '../api/queries';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { addCategoryName, filterOpen } from '../redux/filterSlice';
import { memo } from 'react';

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
        <div
          key={category}
          className="flex items-center justify-between first:pt-6"
          onClick={() => handleCategoryClick(category)}
        >
          <p className="cursor-pointer pb-2 font-satoshi opacity-60 hover:opacity-100">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </p>
        </div>
      ))}
    </>
  );
});

export default FilterCategoryList;
