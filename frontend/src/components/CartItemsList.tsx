import { useSelector } from 'react-redux';
import { CartItem, Empty } from '.';
import { selectAllCart } from '../redux/cartSlice';

const CartItemsList = () => {
  const cart = useSelector(selectAllCart);

  return (
    <div className="h-full max-h-[505px] w-full rounded-[20px] ring-1 ring-black ring-opacity-10 dark:ring-white">
      {cart.length ? (
        cart.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default CartItemsList;
