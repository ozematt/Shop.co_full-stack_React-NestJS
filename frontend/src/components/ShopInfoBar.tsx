import { useEffect } from 'react';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { useLocation } from 'react-router-dom';
import {
  CategoryName,
  FilterSettingsIcon,
  FilterWindow,
  NumberOfProducts,
  SortByMethod,
} from './';
import { addCategoryName } from '../redux/filterSlice';

const ShopInfoBar = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const { pathname } = useLocation();

  ////LOGIC
  //when pathname is changing to "/shop" set category name in global state to ""
  useEffect(() => {
    if (pathname === '/shop') {
      dispatch(addCategoryName(''));
    }
  }, [pathname]);

  ////UI
  return (
    <div className="relative flex items-center justify-between">
      <CategoryName />
      <div className="flex items-center pt-2 max-sm:text-[14px]">
        <NumberOfProducts />
        <FilterSettingsIcon />
        <SortByMethod />
      </div>
      <FilterWindow />
    </div>
  );
};

export default ShopInfoBar;
