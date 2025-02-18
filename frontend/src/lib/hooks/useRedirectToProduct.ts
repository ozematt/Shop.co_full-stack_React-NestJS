import { useNavigate } from 'react-router-dom';
import { AppDispatch, useAppDispatch } from '../../redux/store';
import { type SelectedProduct } from '../types';
import { addCategoryName } from '../../redux/filterSlice';
import { useCallback } from 'react';

const useRedirectToProduct = () => {
  //
  //DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  ////LOGIC
  const handleProductClick = useCallback(
    ({ id, title, category }: SelectedProduct) => {
      navigate(`/shop/${category}/${title}?id=${id}`);
      dispatch(addCategoryName(category));
    },
    [dispatch, navigate],
  );

  return { handleProductClick };
};

export default useRedirectToProduct;
