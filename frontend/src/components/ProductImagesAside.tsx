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
  return (
    <div className="flex h-[100px] justify-between gap-[12px] xl:h-[500px] xl:w-[168px] xl:flex-col">
      {!loaded ? (
        <SkeletonImagesAside />
      ) : (
        images
          .slice(0, 3)
          .map((image) => (
            <img
              key={image}
              src={image}
              alt="product image"
              onClick={() => onClick(image)}
              className={`h-full max-h-[156px] w-screen cursor-pointer rounded-[20px] bg-grayBG object-contain transition-opacity duration-500 hover:ring-2 hover:ring-black dark:bg-zinc-900 dark:hover:ring-white ${loaded ? 'opacity-100' : 'opacity-0'}`}
            />
          ))
      )}
    </div>
  );
};

export default ProductImagesAside;
