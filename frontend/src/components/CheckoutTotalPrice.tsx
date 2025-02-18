import { useSelector } from 'react-redux';
import { PriceTag, SubduedText } from '.';
import { RootState } from '../redux/store';

const CheckoutTotalPrice = () => {
  //
  ////DATA
  const total = useSelector((state: RootState) => state.cart.total);

  ////UI
  return (
    <div className="flex justify-between pt-5">
      <SubduedText text="Total Price" />
      <PriceTag price={'$' + total} />
    </div>
  );
};

export default CheckoutTotalPrice;
