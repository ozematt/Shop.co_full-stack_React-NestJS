import { Rating } from '@mui/material';
import { useDiscount, useRedirectToProduct } from '../lib/hooks';
import { type ProductProps } from '../lib/types';
import { ProductImage, ProductRating, ProductTitle } from '.';
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
  const { handleProductClick } = useRedirectToProduct();
  const { newPrice, discount } = useDiscount({ discountPercentage, price });
  const product = { id, title, category }; // data for custom hook

  const dispatch: AppDispatch = useAppDispatch();

  const fetchedProducts =
    useSelector(
      (state: RootState) => state.products.fetchedProducts.products,
    ) || null;

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
  });

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

      <div className="flex items-center gap-[2px] pt-2 font-satoshi text-2xl font-bold">
        {' '}
        ${newPrice}
        {discount === 0 ? null : (
          <>
            <span className="mx-[-9px] scale-[0.65] line-through opacity-30">
              ${price}
            </span>
            <div className="h-[28px] w-[58px] rounded-[62px] bg-red-500 bg-opacity-10 py-[6.5px] text-center font-satoshi text-xs font-medium text-red-500 dark:bg-opacity-90 dark:text-white">
              -{discount}%
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
