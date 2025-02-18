import useCategoryClick from '../lib/hooks/useCategoryClick';
import { beauty } from '../assets';

const CategoryBeautyItem = () => {
  //
  ////DATA
  const { handleCategoryClick } = useCategoryClick();

  ////UI
  return (
    <div
      onClick={() => handleCategoryClick('beauty')}
      className="relative h-[190px] w-[407px] flex-auto cursor-pointer overflow-hidden rounded-[20px] bg-white transition duration-300 ease-in-out hover:scale-95 md:h-[289px] dark:bg-black"
    >
      <p className="pl-[36px] pt-[25px] font-satoshi text-2xl font-bold md:text-[36px]">
        Beauty
      </p>
      <img
        src={beauty}
        alt="cosmetics"
        width={300}
        className="absolute right-[-50px] top-0 h-full w-full object-contain"
      />
    </div>
  );
};

export default CategoryBeautyItem;
