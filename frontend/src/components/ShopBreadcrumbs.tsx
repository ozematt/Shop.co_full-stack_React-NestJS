import { useLocation, useNavigate } from 'react-router-dom';

const ShopBreadcrumbs = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const location = useLocation();

  ////UI
  return (
    <>
      {' '}
      {location.pathname.includes('/shop') && (
        <p
          className="cursor-pointer px-2 font-satoshi leading-none hover:opacity-70"
          onClick={() => navigate('/shop')}
        >
          {location.pathname === '/shop' ? (
            <strong onClick={() => navigate('/shop')}>Shop</strong>
          ) : (
            'Shop'
          )}
        </p>
      )}
    </>
  );
};

export default ShopBreadcrumbs;
