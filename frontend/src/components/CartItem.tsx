import { removeFromCart, updateCart } from '../redux/cartSlice';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { memo, useCallback } from 'react';
import { type CartItemT } from '../lib/types';
import {
  CartItemDeleteIcon,
  CartItemImg,
  CartItemPrice,
  CartItemQuantity,
  CartItemShippingTime,
  CartItemTitle,
} from '.';

const CartItem = memo(
  ({
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

    ////UI
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
          <div className="flex w-full max-w-[20px] flex-col items-end justify-between lg:max-w-[126px]">
            <CartItemDeleteIcon onClick={() => handleRemoveFromCart(id)} />
            <CartItemQuantity
              onClickDecrement={() => handleDecrementItemQuantity(id, quantity)}
              onClickIncrement={() => handleIncrementItemQuantity(id, quantity)}
              quantity={quantity}
            />
          </div>
        </div>
        <div className="mx-[14px] mt-[16px] border-b-[1px] sm:mx-[24px] sm:mt-[24px]" />
      </>
    );
  },
);

export default CartItem;
