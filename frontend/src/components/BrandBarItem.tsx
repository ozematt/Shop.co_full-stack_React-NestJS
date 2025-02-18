type BrandBarItemProps = {
  image: string;
  name: string;
};

const BrandBarItem = ({ image, name }: BrandBarItemProps) => {
  //
  ////UI
  return (
    <img
      src={image}
      alt={name}
      className="aspect-[3/2] h-[50%] w-[15%] object-contain contrast-200 grayscale invert filter max-[974px]:last:hidden max-md:first:hidden dark:invert-0"
    />
  );
};

export default BrandBarItem;
