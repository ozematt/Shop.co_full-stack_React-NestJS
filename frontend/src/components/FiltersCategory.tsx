import { useEffect, useState } from 'react';
import { FilterCategoryList, FilterHeader } from '.';
import { useParams } from 'react-router-dom';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { addCategorizedProducts } from '../redux/productsSlice';
import { addCategoryName } from '../redux/filterSlice';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../api/queries';

type FiltersCategoryProps = {
  toggle: boolean;
  window?: boolean;
};

const FiltersCategory = ({ toggle, window }: FiltersCategoryProps) => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  const { category } = useParams();
  const [open, setOpen] = useState(true);

  const { data } = useQuery({
    queryKey: ['productsByCategory', { category }],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });

  ////LOGIC
  useEffect(() => {
    if (category && data) {
      dispatch(addCategoryName(category));
      dispatch(addCategorizedProducts(data));
    }
  }, [category, data]);

  //toggle open state if filter icon was clicked
  useEffect(() => {
    if (toggle) return setOpen(true);
    setOpen(false);
  }, [toggle]);

  ////UI
  return (
    <>
      <FilterHeader
        title="Category"
        onClick={() => setOpen(!open)}
        state={open}
      />
      <div className="pb-6">
        {open && <FilterCategoryList window={window} />}
      </div>
    </>
  );
};

export default FiltersCategory;
