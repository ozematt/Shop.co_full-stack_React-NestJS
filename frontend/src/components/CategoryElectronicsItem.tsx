import useCategoryClick from '../lib/hooks/useCategoryClick';
import { electronics } from '../assets';

const CategoryElectronicsItem = () => {
  //
  ////DATA
  const { handleCategoryClick } = useCategoryClick();

  ////UI
  return (
    <div
      onClick={() => handleCategoryClick('mobile-accessories')}
      className="relative h-[190px] w-[407px] flex-auto cursor-pointer overflow-hidden rounded-[20px] bg-white transition duration-300 ease-in-out hover:scale-95 md:h-[289px] dark:bg-black"
    >
      <p className="pl-[36px] pt-[25px] font-satoshi text-2xl font-bold md:text-[36px]">
        Electronics
      </p>
      <img
        src={electronics}
        alt="electronics devices"
        className="absolute left-[100px] top-0 h-full w-full scale-x-[-1] transform object-contain"
      />
    </div>
  );
};

export default CategoryElectronicsItem;
