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
    <div className="relative flex justify-between gap-[14px] min-[1430px]:flex-col">
      {!loaded && (
        <div className="absolute h-full max-h-[106px] animate-pulse">
          <div className="h-full w-full bg-black"></div>
          <div className="h-full w-full bg-black"></div>
          <div className="h-full w-full bg-black"></div>
        </div>
      )}

      {images.slice(0, 3).map((image) => (
        <img
          key={image}
          src={image}
          alt="image"
          onClick={() => onClick(image)}
          className="h-full max-h-[106px] max-w-[111px] rounded-[20px] bg-grayBG object-contain ring-black hover:ring-1 md:max-h-[167px] md:max-w-[152px] dark:bg-zinc-900 dark:ring-white"
        />
      ))}
    </div>
  );
};

export default SkeletonAsideImages;
