import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { useCallback, useEffect, useState } from 'react';
import { addTotalPrice, selectAllCart } from '../redux/cartSlice';
import { calculateTotalDiscount } from '../lib/helpers';
import { useNavigate } from 'react-router-dom';
import {
  CartCheckoutButton,
  CartDeliveryFee,
  CartDiscount,
  CartPromoCode,
  CartSubtotal,
  CartTotalPrice,
  SectionSubtitle,
} from '.';

const CartTotals = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const cart = useSelector(selectAllCart);
  const dispatch: AppDispatch = useAppDispatch();
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [savings, setSavings] = useState(0);

  ////LOGIC
  useEffect(() => {
    if (cart.length) {
      const { effectiveDiscount } = calculateTotalDiscount(cart);
      const discount = Math.round(Number(effectiveDiscount));
      setTotalDiscount(discount);
    }
    if (subtotal === 0) {
      setTotalDiscount(0);
    }
  }, [cart, subtotal]);

  useEffect(() => {
    if (totalDiscount !== 0) {
      const savings = Math.round((subtotal * totalDiscount) / 100);
      setSavings(savings);
    }
  }, [cart, totalDiscount]);

  const handleCheckout = useCallback(() => {
    const totalPrice = Number((subtotal - savings + 15).toFixed(2)) || 0;
    if (cart.length) {
      navigate('/cart/checkout');
      dispatch(addTotalPrice(totalPrice));
    }
  }, [subtotal, savings, cart, navigate, dispatch]);

  ////UI
  return (
    <div className="w-full rounded-[20px] ring-1 ring-black ring-opacity-10 min-[1454px]:max-w-[505px] dark:ring-white">
      <div className="px-6 pb-[33px] pt-[20px]">
        <div className="pb-1">
          <SectionSubtitle title="Order Summary" />
        </div>
        <div>
          <CartSubtotal subtotal={subtotal} />
          <CartDiscount totalDiscount={totalDiscount} savings={savings} />
          <CartDeliveryFee />
          <div className="border-b-[1px] pt-5" />
          <CartTotalPrice subtotal={subtotal} savings={savings} />
          <div className="flex w-full flex-col items-center">
            <CartPromoCode />
            <CartCheckoutButton onClick={handleCheckout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
