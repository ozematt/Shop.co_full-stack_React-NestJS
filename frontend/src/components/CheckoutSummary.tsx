import { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  CheckoutPayButton,
  CheckoutTotalPrice,
  SectionSubtitle,
} from './';
import { AppDispatch, useAppDispatch } from '../redux/store';
import { clearCart } from '../redux/cartSlice';
import {
  type OrderData,
  cartLocalStorageSchema,
  CartItemT,
} from '../lib/types';
import { useMutation } from '@tanstack/react-query';
import { setOrder as setOrderQuery } from '../api/queries';

const CheckoutSummary = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  const [order, setOrder] = useState<OrderData | null>(null);
  const [success, setSuccess] = useState(false);

  ////LOGIC
  //creating order data out of local storage data, with validation
  useEffect(() => {
    const rawCart: unknown = JSON.parse(localStorage.getItem('cart') || '{}');
    const parsedCart = cartLocalStorageSchema.safeParse(rawCart);

    if (parsedCart.success) {
      const cartItems = parsedCart.data.entities;
      const itemsArray = Object.values(cartItems);

      // creating order object
      const order: OrderData = {
        orderItems: itemsArray.map((item: CartItemT) => ({
          productName: item.title,
          image: item.image,
          price: item.price,
          quantity: item.quantity,
        })),
        total: parsedCart.data.total,
      };

      setOrder(order);
    } else {
      console.error('Invalid cart data in localStorage', parsedCart.error);
      localStorage.removeItem('cart');
      setOrder(null);
    }
  }, []);

  const orderMutate = useMutation({
    mutationFn: setOrderQuery,
    onError: () => {
      console.log('Error fest');
      setSuccess(false);
    },
    onSuccess: (data) => {
      dispatch(clearCart());
      setSuccess(true);
      console.log(data);
    },
  });

  const handleOrder = useCallback(() => {
    orderMutate.mutate(order as OrderData);
  }, [dispatch, order]);

  ////UI
  return (
    <>
      <div className="w-full max-w-[805px] rounded-[20px] ring-1 ring-black ring-opacity-10 min-[1454px]:max-w-[505px] dark:ring-white">
        <div className="px-6 pb-[33px] pt-[20px]">
          <div className="pb-1">
            <SectionSubtitle title="Total Payable Amount" />
          </div>
          <div className="flex flex-col">
            <CheckoutTotalPrice />
            <div className="border-b-[1px] pt-5" />
            <CheckoutPayButton onClick={handleOrder} />
          </div>
        </div>
      </div>
      {success && (
        <Alert
          title="Success!"
          text="Thank you for your purchase! Your order has been successfully placed.
          You will be redirected to the homepage shortly."
          buttonText="OK"
        />
      )}
    </>
  );
};

export default CheckoutSummary;
