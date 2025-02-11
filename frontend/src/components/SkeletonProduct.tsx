import { useState } from 'react';

type SkeletonImageProps = {
  src: string | undefined;
  description: string;
};

const SkeletonProduct = ({ src, description }: SkeletonImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="h-[304px] w-full overflow-hidden rounded-[20px] bg-grayBG sm:h-[298px] sm:w-[295px] dark:bg-zinc-900">
      {/* Skeleton Loader */}
      {!loaded && (
        <div className="absolute inset-0 z-50 animate-pulse space-y-[7px]">
          {' '}
          <div className="h-[304px] w-full animate-pulse rounded-[20px] bg-gray-300" />
          <div className="bottom-[64px] z-50 h-[30px] w-full animate-pulse bg-gray-300" />
          <div className="bottom-[64px] z-50 h-[30px] w-full animate-pulse bg-gray-300" />
          <div className="bottom-[64px] z-50 h-[30px] w-full animate-pulse bg-gray-300" />
        </div>
      )}

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

export default SkeletonProduct;
