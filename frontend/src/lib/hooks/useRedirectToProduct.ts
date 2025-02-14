import { useNavigate } from 'react-router-dom';
import { AppDispatch, useAppDispatch } from '../../redux/store';
import { type SelectedProduct } from '../types';
import { addCategoryName } from '../../redux/filterSlice';

const useRedirectToProduct = () => {
  //
  //DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  ////LOGIC
  const handleProductClick = ({ id, title, category }: SelectedProduct) => {
    navigate(`/shop/${category}/${title}?id=${id}`);
    dispatch(addCategoryName(category));
  };

  return { handleProductClick };
};

export default useRedirectToProduct;
