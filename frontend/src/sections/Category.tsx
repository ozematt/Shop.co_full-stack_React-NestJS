import {
  CategoryBeautyItem,
  CategoryClothesItem,
  CategoryElectronicsItem,
  SectionTitle,
} from '../components';
import CategoryKitchenItem from '../components/CategoryKitchenItem';

const Category = () => {
  //
  ////UI
  return (
    <section id="category" className="mt-[80px] px-4 sm:px-[100px]">
      <div className="z-[1] rounded-[40px] bg-grayBG dark:bg-zinc-900">
        <div className="pb-[24px] pt-[40px] sm:pb-[64px] sm:pt-[70px]">
          <SectionTitle title="browse by category" center />
        </div>

        <div className="space-y-4 px-[24px] sm:px-[64px]">
          <div className="flex gap-4 max-xl:flex-wrap">
            <CategoryBeautyItem />
            <CategoryClothesItem />
          </div>
          <div className="flex gap-4 pb-[74px] max-xl:flex-wrap">
            <CategoryKitchenItem />
            <CategoryElectronicsItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
