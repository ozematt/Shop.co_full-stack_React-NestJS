type SkeletonMainImageProps = {
  image: string | undefined;
  onLoad: () => void;
  loaded: boolean;
};

const SkeletonMainImage = ({
  image,
  onLoad,
  loaded,
}: SkeletonMainImageProps) => {
  return (
    <div className="relative flex max-h-[530px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-grayBG object-contain min-[1430px]:max-w-[444px] dark:bg-zinc-900">
      {' '}
      {!loaded && (
        <div className="insert-0 absolute h-full w-full animate-pulse bg-gray-300" />
      )}
      <img
        src={image}
        alt="main image"
        className="h-full w-full object-cover transition-opacity duration-500"
        onLoad={onLoad}
      />
    </div>
  );
};

export default SkeletonMainImage;
