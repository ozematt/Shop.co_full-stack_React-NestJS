import { SkeletonImagesAside } from '.';

type ProductImagesAsideProps = {
  images: string[];
  onClick: (img: string) => void;
  loaded: boolean;
};

const ProductImagesAside = ({
  images,
  onClick,
  loaded,
}: ProductImagesAsideProps) => {
  //
  ////UI
  return (
    <div className="flex h-[100px] w-full justify-between gap-[12px] xl:h-[500px] xl:w-[168px] xl:flex-col">
      {!loaded ? (
        <SkeletonImagesAside />
      ) : (
        images.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="grid h-full max-h-[156px] w-full animate-pulse place-items-center rounded-xl bg-grayBG hover:ring-2 hover:ring-black dark:bg-zinc-900"
          >
            {' '}
            <img
              src={image}
              alt="product image"
              onClick={() => onClick(image)}
              className={`object-contain transition-opacity duration-500 dark:hover:ring-white ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductImagesAside;
