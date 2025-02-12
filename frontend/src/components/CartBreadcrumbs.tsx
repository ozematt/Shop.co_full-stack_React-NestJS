import { useLocation, useNavigate } from 'react-router-dom';
import { Arrow } from '.';

const CartBreadcrumbs = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const location = useLocation();

  ////UI
  return (
    <>
      {location.pathname === '/cart' && (
        <p className="cursor-pointer px-2 font-satoshi leading-none hover:opacity-70">
          <strong>Cart</strong>
        </p>
      )}

      {location.pathname === '/cart/checkout' && (
        <div
          onClick={() => navigate('/cart')}
          className="flex cursor-pointer px-2 font-satoshi leading-none hover:opacity-70"
        >
          Cart
          <Arrow />
          <strong>Checkout</strong>
        </div>
      )}
    </>
  );
};

export default CartBreadcrumbs;
