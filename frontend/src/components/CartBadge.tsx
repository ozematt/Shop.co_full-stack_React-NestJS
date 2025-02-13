import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CartBadge = () => {
  //
  //DATA
  const quantity = useSelector((state: RootState) => state.cart.itemsInCart);

  ////UI
  return (
    <>
      {' '}
      {quantity > 0 && (
        <>
          <div className="absolute right-[-7px] top-[-2px] h-[17px] w-[17px] animate-ping rounded-full bg-orange-400 ring-2 ring-white dark:ring-black" />
          <div className="absolute right-[-7px] top-[-2px] h-[17px] w-[17px] rounded-full bg-orange-400 ring-2 ring-white dark:ring-black" />
          {quantity === 1 ? (
            <p className="absolute right-[-1px] top-[-1.5px] font-satoshi text-[11px] font-medium text-black">
              {quantity}
            </p>
          ) : (
            <p
              style={quantity >= 10 ? { right: '-4px' } : undefined}
              className="absolute right-[-2px] top-[-1.5px] font-satoshi text-[11px] font-medium text-black"
            >
              {quantity}
            </p>
          )}
        </>
      )}
    </>
  );
};

export default CartBadge;
