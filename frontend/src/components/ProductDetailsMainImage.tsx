import { SkeletonMainImage } from '.';

type ProductDetailsMainImageProps = {
  image: string | undefined;
  onLoad: () => void;
  loaded: boolean;
};

const ProductDetailsMainImage = ({
  image,
  onLoad,
  loaded,
}: ProductDetailsMainImageProps) => {
  //
  //UI
  return (
    <div className="relative flex h-full max-h-[500px] w-full max-w-[644px] items-center justify-center overflow-hidden rounded-[20px] bg-grayBG object-contain max-xl:max-h-[330px] dark:bg-zinc-900">
      {!loaded && <SkeletonMainImage />}
      <img
        src={image}
        alt="main product image"
        className={`h-[100%] w-[100%] object-contain transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={onLoad}
      />
    </div>
  );
};

export default ProductDetailsMainImage;
