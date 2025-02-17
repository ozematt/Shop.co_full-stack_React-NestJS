import { useRedirectToProduct } from '../lib/hooks';
import { type ProductProps } from '../lib/types';
import { ProductImage, ProductPrice, ProductRating, ProductTitle } from '.';
import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../api/queries';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { addProducts } from '../redux/productsSlice';

const Product = ({
  id,
  thumbnail,
  title,
  price,
  rating,
  discountPercentage,
  category,
}: ProductProps) => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  const { handleProductClick } = useRedirectToProduct();
  const product = { id, title, category }; // data for custom hook

  const fetchedProducts =
    useSelector(
      (state: RootState) => state.products.fetchedProducts.products,
    ) || null;

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

  ////LOGIC
  useEffect(() => {
    if (products && fetchedProducts) {
      dispatch(addProducts(products));
    }
  }, [products, fetchedProducts]);

  ////UI
  return (
    <div
      onClick={() => handleProductClick(product)}
      className="h-[400px] cursor-pointer transition ease-in-out hover:scale-95 sm:h-[408px]"
    >
      <ProductImage src={thumbnail} description={title} />
      <ProductTitle title={title} />
      <ProductRating rating={rating} />
      <ProductPrice discountPercentage={discountPercentage} price={price} />
    </div>
  );
};

export default Product;
