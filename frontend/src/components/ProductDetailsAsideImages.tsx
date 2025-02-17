import { SkeletonImagesAside } from '.';

type ProductDetailsAsideImagesProps = {
  images: string[];
  onClick: (img: string) => void;
  loaded: boolean;
};

const ProductDetailsAsideImages = ({
  images,
  onClick,
  loaded,
}: ProductDetailsAsideImagesProps) => {
  //
  ////UI
  return (
    <div className="flex h-[100px] w-full justify-between gap-[12px] xl:h-[500px] xl:w-[180px] xl:flex-col">
      {!loaded ? (
        <SkeletonImagesAside />
      ) : (
        images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="grid w-full place-items-center overflow-hidden rounded-xl bg-grayBG hover:ring-2 hover:ring-black lg:h-[158px] dark:bg-zinc-900 dark:hover:ring-white"
          >
            {' '}
            <img
              src={image}
              alt="product image"
              onClick={() => onClick(image)}
              className={`object-contain transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductDetailsAsideImages;
