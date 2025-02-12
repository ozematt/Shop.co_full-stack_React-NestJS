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
    <div className="relative flex max-h-[530px] w-full max-w-[644px] flex-auto items-center justify-center overflow-hidden rounded-[20px] bg-grayBG object-contain dark:bg-zinc-900">
      {!loaded && (
        <div className="absolute inset-0 h-full w-full animate-pulse bg-black/10" />
      )}
      <img
        src={image}
        alt="main product image"
        className={`h-full w-full object-cover transition-opacity ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={onLoad}
      />
    </div>
  );
};

export default SkeletonMainImage;
