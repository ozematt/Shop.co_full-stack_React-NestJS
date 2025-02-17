import { useEffect, useState } from 'react';
import { type ProductImagesProps } from '../lib/types';
import { ProductDetailsMainImage, ProductDetailsAsideImages } from '.';

const ProductDetailsImages = ({ images }: ProductImagesProps) => {
  //
  ///DATA
  const [bigImg, setBigImg] = useState<string>('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setBigImg(images[0]);
  }, [images]);

  ////UI
  return (
    <div className="mx-auto w-full max-w-[610px] gap-[12px] max-xl:space-y-3 xl:flex xl:flex-row-reverse">
      <ProductDetailsMainImage
        image={bigImg}
        onLoad={() => setLoaded(true)}
        loaded={loaded}
      />
      <ProductDetailsAsideImages
        images={images}
        onClick={setBigImg}
        loaded={loaded}
      />
    </div>
  );
};

export default ProductDetailsImages;
