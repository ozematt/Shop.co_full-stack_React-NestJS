import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../api/queries';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addCategorizedProducts } from '../redux/productsSlice';
import {
  CartBreadcrumbs,
  CategoryBreadcrumbs,
  HomeBreadcrumbs,
  ProductBreadcrumbs,
  ShopBreadcrumbs,
} from '.';

const Breadcrumbs = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  const { category } = useParams();

  const productsByCategory = useSelector(
    (state: RootState) => state.products.filteredProductsByCategory?.products,
  );

  ////LOGIC
  const { data } = useQuery({
    queryKey: ['productsByCategory', { category }],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category,
  });

  useEffect(() => {
    if (productsByCategory && data) {
      dispatch(addCategorizedProducts(data));
    }
  }, [productsByCategory, data]);

  ////UI
  return (
    <div className="flex items-center pt-6 opacity-60 max-sm:text-[14px]">
      <HomeBreadcrumbs />
      <CartBreadcrumbs />
      <ShopBreadcrumbs />
      <CategoryBreadcrumbs />
      <ProductBreadcrumbs />
    </div>
  );
};

export default Breadcrumbs;
