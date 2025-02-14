import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { uppercaseCategory } from '../lib/helpers';

const CategoryName = () => {
  //
  ////DATA
  const categoryName = useSelector(
    (state: RootState) => state.filter.selectedCategory,
  );

  ////UI
  return (
    <h3 className="font-satoshi text-2xl font-bold sm:text-[32px]">
      {categoryName ? uppercaseCategory(categoryName) : 'Products'}
    </h3>
  );
};

export default CategoryName;
