import { useState } from 'react';

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
  // const [time, setTime] = useState(false);

  // const handleTimeout = () => {
  //   setTimeout(() => {
  //     setTime(true);
  //   }, 1000);
  // };

  return (
    <div className="flex h-[100px] justify-between gap-[12px] xl:h-[500px] xl:w-[168px] xl:flex-col">
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="h-full max-h-[156px] w-full rounded-xl bg-black"
          />
        ))}
      {/* {images
            .slice(0, 3)
            .map((image) => (
              <img
                key={image}
                src={image}
                alt="product image"
                onClick={() => onClick(image)}
                className="h-full max-h-[106px] max-w-[111px] cursor-pointer rounded-[20px] bg-grayBG object-contain transition-all hover:ring-2 hover:ring-black md:max-h-[167px] md:max-w-[152px] dark:bg-zinc-900 dark:hover:ring-white"
              />
            ))} */}
    </div>
  );
};

export default SkeletonAsideImages;
