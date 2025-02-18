import { useNavigate } from 'react-router-dom';
import { cartIcon } from '../assets';
import { useCallback } from 'react';
import { CartBadge } from '.';

const CartIcon = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const token = localStorage.getItem('token') || undefined;

  ////LOGIC
  const handleCart = useCallback(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    navigate('/cart');
  }, [token, navigate]);

  ////UI
  return (
    <div onClick={handleCart} className="relative cursor-pointer">
      <img
        src={cartIcon}
        alt="cart icon"
        width={24}
        height={24}
        className="hover:opacity-60 dark:invert"
      />
      <CartBadge />
    </div>
  );
};

export default CartIcon;
