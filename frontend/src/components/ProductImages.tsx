import { useEffect, useState } from 'react';
import { type ProductImagesProps } from '../lib/types';
import { SkeletonMainImage } from '.';
import SkeletonAsideImages from './SkeletonAsideImages';

const ProductImages = ({ images }: ProductImagesProps) => {
  //
  ///DATA
  const [bigImg, setBigImg] = useState<string>('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (images) setBigImg(images[0]);
  }, [images]);

  ////UI
  return (
    <div className="mx-auto flex w-full max-w-[610px] gap-[14px] max-[1430px]:flex-col-reverse">
      {' '}
      <SkeletonAsideImages
        images={images}
        onClick={setBigImg}
        loaded={loaded}
      />
      {/* main IMG */}
      <SkeletonMainImage
        image={bigImg}
        onLoad={() => setLoaded(true)}
        loaded={loaded}
      />
    </div>
  );
};

export default ProductImages;
