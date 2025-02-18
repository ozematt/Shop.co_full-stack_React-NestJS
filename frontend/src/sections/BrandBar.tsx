import { BrandBarItem } from '../components';
import { brands } from '../constants';

const BrandBar = () => {
  //
  ////UI
  return (
    <section className="flex h-[122px] items-center justify-center gap-10 bg-black px-4 sm:px-[100px] dark:bg-grayBG">
      {brands.map((brand) => (
        <BrandBarItem key={brand.name} image={brand.img} name={brand.name} />
      ))}
    </section>
  );
};

export default BrandBar;
