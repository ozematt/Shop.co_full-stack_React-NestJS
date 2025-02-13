import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateCart } from '../redux/cartSlice';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { minus, plus, deleteIcon } from '../assets';
import { useCallback } from 'react';
import { type CartItemT } from '../lib/types';
import {
  CartItemImg,
  CartItemPrice,
  CartItemShippingTime,
  CartItemTitle,
} from '.';

const CartItem = ({
  id,
  title,
  image,
  category,
  price,
  purchaseTotal,
  quantity,
  shippingTime,
}: CartItemT) => {
  //
  ////DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  ////LOGIC
  // increment item quantity
  const handleIncrementItemQuantity = useCallback(
    (id: number, quantity: number) => {
      dispatch(
        updateCart({
          id: id,
          changes: { quantity: quantity + 1 },
        }),
      );
    },
    [dispatch],
  );

  // decrement item quantity
  const handleDecrementItemQuantity = useCallback(
    (id: number, quantity: number) => {
      if (quantity > 1) {
        dispatch(
          updateCart({
            id: id,
            changes: { quantity: quantity - 1 },
          }),
        );
      } else {
        dispatch(removeFromCart(id));
      }
    },
    [dispatch],
  );

  // remove item
  const handleRemoveFromCart = useCallback(
    (id: number) => {
      dispatch(removeFromCart(id));
    },
    [dispatch],
  );

  return (
    <>
      <div className="relative flex justify-between px-[14px] pt-[14px] sm:px-[24px] sm:pt-[24px]">
        <div className="flex">
          <CartItemImg
            image={image}
            category={category}
            title={title}
            id={id}
          />
          <div className="flex flex-col justify-between pl-[16px]">
            <div>
              <CartItemTitle title={title} />
              <CartItemShippingTime shippingTime={shippingTime} />
            </div>
            <CartItemPrice purchaseTotal={purchaseTotal} price={price} />
          </div>
        </div>

        {/* handle quantity */}
        <div className="flex w-full max-w-[20px] flex-col items-end justify-between lg:max-w-[126px]">
          <img
            src={deleteIcon}
            alt="trash can icon"
            onClick={() => handleRemoveFromCart(id)}
            className="cursor-pointer hover:opacity-70 max-lg:absolute max-sm:scale-[0.8]"
          />
          <div className="bottom-0 right-[14px] h-full max-h-[31px] w-full max-w-[105px] max-lg:absolute sm:right-[20px] lg:max-h-[44px] lg:max-w-[126px]">
            <button className="flex h-full w-full max-w-[110px] items-center justify-between rounded-full bg-grayBG px-4 font-satoshi font-medium max-md:text-sm md:max-w-[170px] dark:bg-black dark:ring-1 dark:ring-white">
              <img
                src={minus}
                alt="minus"
                width={20}
                height={20}
                onClick={() => handleDecrementItemQuantity(id, quantity)}
                className="md:scale-75 dark:invert"
              />
              <span className="text-sm lg:text-base">{quantity}</span>
              <img
                src={plus}
                alt="plus"
                width={20}
                height={20}
                onClick={() => handleIncrementItemQuantity(id, quantity)}
                className="md:scale-75 dark:invert"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="mx-[14px] mt-[16px] border-b-[1px] sm:mx-[24px] sm:mt-[24px]" />
    </>
  );
};

export default CartItem;
