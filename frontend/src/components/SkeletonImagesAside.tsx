const SkeletonImagesAside = () => {
  //
  ////UI
  return Array(3)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="h-full max-h-[156px] w-full animate-pulse rounded-xl bg-black/30 dark:bg-zinc-900"
      />
    ));
};

export default SkeletonImagesAside;
