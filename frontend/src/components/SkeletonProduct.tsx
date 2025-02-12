const SkeletonProduct = () => {
  //
  ////UI
  return (
    <div className="absolute inset-0 z-50 animate-pulse space-y-[7px]">
      {' '}
      <div className="h-[304px] w-full animate-pulse rounded-[20px] bg-black/30" />
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="bottom-[64px] z-50 h-[30px] w-full animate-pulse bg-black/30"
          />
        ))}
    </div>
  );
};

export default SkeletonProduct;
