import { useParams } from 'react-router-dom';
import { Arrow } from '.';

const ProductBreadcrumbs = () => {
  //
  ////DATA
  const { product } = useParams();

  ////UI
  return (
    <>
      {product && <Arrow />}
      <p className="px-2 font-satoshi leading-none">
        {product && <strong>{product}</strong>}
      </p>
    </>
  );
};

export default ProductBreadcrumbs;
