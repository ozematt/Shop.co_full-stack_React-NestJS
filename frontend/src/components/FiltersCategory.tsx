import { useEffect, useMemo, useState } from 'react';
import { FilterCategoryList, FilterHeader } from '.';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { addCategorizedProducts } from '../redux/productsSlice';
import { type ProductItemSchema } from '../lib/types';

import { addCategoryName } from '../redux/filterSlice';

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
  category;

  const { fetchedProducts: allProducts } = useSelector(
    (state: RootState) => state.products,
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.filter.selectedCategory,
  );

  ////LOGIC
  useEffect(() => {
    if (category) dispatch(addCategoryName(category));
  }, [category]);

  const categorizedProducts: ProductItemSchema[] = useMemo(
    () =>
      allProducts.products.filter(
        (product) => product.category === selectedCategory,
      ),
    [allProducts.products, selectedCategory],
  );

  useEffect(() => {
    if (selectedCategory) {
      const dataToAdd = {
        products: categorizedProducts,
        total: categorizedProducts.length,
        skip: 0,
        limit: 0,
      };
      dispatch(addCategorizedProducts(dataToAdd));
      dispatch(addCategoryName(selectedCategory ?? selectedCategory));
    }
  }, [selectedCategory]);

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
