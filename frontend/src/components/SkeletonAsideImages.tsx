type SkeletonAsideImagesProps = {
  images: string[];
  onClick: (img: string) => void;
  loaded: boolean;
};

const SkeletonAsideImages = ({
  images,
  onClick,
  loaded,
}: SkeletonAsideImagesProps) => {
  return (
    <div className="flex h-[100px] justify-between gap-[12px] xl:h-[500px] xl:w-[168px] xl:flex-col">
      {!loaded
        ? Array(3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-full max-h-[156px] w-full animate-pulse rounded-xl bg-black/30"
              />
            ))
        : images
            .slice(0, 3)
            .map((image) => (
              <img
                key={image}
                src={image}
                alt="product image"
                onClick={() => onClick(image)}
                className={`h-full max-h-[156px] w-screen cursor-pointer rounded-[20px] bg-grayBG object-contain transition-opacity duration-500 hover:ring-2 hover:ring-black dark:bg-zinc-900 dark:hover:ring-white ${loaded ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
    </div>
  );
};

export default SkeletonAsideImages;
