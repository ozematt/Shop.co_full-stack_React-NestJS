import { PriceTag, SubduedText } from '.';

const CartDeliveryFee = () => {
  //
  ////UI
  return (
    <div className="flex justify-between pt-5">
      <SubduedText text="Delivery Fee" />
      <PriceTag price="$15" />
    </div>
  );
};

export default CartDeliveryFee;
