import { useNavigate, useParams } from 'react-router-dom';
import { Arrow } from '.';
import { uppercaseCategory } from '../lib/helpers';

const CategoryBreadcrumbs = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const { category, product } = useParams();

  ////UI
  return (
    <>
      {' '}
      {category && <Arrow />}
      <p
        className="cursor-pointer px-2 font-satoshi leading-none hover:opacity-70"
        onClick={() => navigate(`/shop/${category}`)}
      >
        {category && product ? (
          <span>{category && uppercaseCategory(category)}</span>
        ) : (
          <strong>{category && uppercaseCategory(category)}</strong>
        )}
      </p>
    </>
  );
};

export default CategoryBreadcrumbs;
