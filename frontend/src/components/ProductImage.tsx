import { useState } from 'react';
import { SkeletonProduct } from '.';

type ProductImageProps = {
  src: string | undefined;
  description: string;
};

const ProductImage = ({ src, description }: ProductImageProps) => {
  //
  ////DATA
  const [loaded, setLoaded] = useState(false);

  ////UI
  return (
    <div className="h-[304px] w-full overflow-hidden rounded-[20px] bg-grayBG sm:h-[298px] sm:w-[295px] dark:bg-zinc-900">
      {/* Skeleton Loader */}
      {!loaded && <SkeletonProduct />}
      <img
        src={src}
        alt={description}
        className={`h-full w-full object-cover transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default ProductImage;
