import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import {
  AlsoLike,
  Breadcrumbs,
  ProductDetailsImages,
  ProductDetailsMainInfo,
  ProductDetailsMainButtons,
  ProductDetailsOverview,
} from '.';
import { Footer, Newsletter } from '../sections';
import { defaultProduct } from '../constants';
import { type ProductItemSchema } from '../lib/types';

const ProductDetails = () => {
  //
  //DATA
  //data form local storage

  const localProduct = localStorage.getItem('product');

  const initialProduct = localProduct
    ? JSON.parse(localProduct)
    : defaultProduct;

  //displayed product state, initial state is product from local storage
  const [displayedProduct, setDisplayedProduct] =
    useState<ProductItemSchema>(initialProduct);

  //extracted id from ulr
  const [searchParams] = useSearchParams();

  const productId = Number(searchParams.get('id')) || 1;

  //found product from all products
  const productFind = useSelector((state: RootState) =>
    state.products.fetchedProducts.products.find(
      (item) => item.id === Number(productId),
    ),
  );

  ////LOGIC
  useEffect(() => {
    if (productFind) {
      setDisplayedProduct(productFind); // added to local state
      localStorage.setItem('product', JSON.stringify(productFind)); //added to local storage
      const scrollToTop = () => window.scrollTo({ top: 0 });
      scrollToTop();
    }
    // setDisplayedProduct(product)
  }, [productFind]);

  ////UI
  return (
    <>
      <section className="max-container px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div className="mt-9 lg:flex">
          <ProductDetailsImages images={displayedProduct.images} />

          <div className="mx-auto flex w-full max-w-[627px] flex-col justify-between max-lg:mt-7 lg:ml-[40px]">
            <ProductDetailsMainInfo {...displayedProduct} />
            <ProductDetailsMainButtons {...displayedProduct} />
          </div>
        </div>
        {/* Product details + reviews */}
        <ProductDetailsOverview {...displayedProduct} />
        <AlsoLike />
      </section>

      <div className="max-container">
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
