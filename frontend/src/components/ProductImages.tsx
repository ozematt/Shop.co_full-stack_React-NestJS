import { useEffect, useState } from 'react';
import { type ProductImagesProps } from '../lib/types';
import { SkeletonMainImage } from '.';

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
      <div className="relative flex justify-between gap-[14px] min-[1430px]:flex-col">
        {/* <div className="absolute h-full max-h-[106px] animate-pulse" /> */}

        {images.slice(0, 3).map((img) => (
          <img
            key={img}
            src={img}
            alt="image"
            onClick={() => setBigImg(img)}
            className="h-full max-h-[106px] max-w-[111px] rounded-[20px] bg-grayBG object-contain ring-black hover:ring-1 md:max-h-[167px] md:max-w-[152px] dark:bg-zinc-900 dark:ring-white"
          />
        ))}
      </div>
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
