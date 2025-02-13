type CartItemShippingTimeProps = {
  shippingTime: string;
};

const CartItemShippingTime = ({ shippingTime }: CartItemShippingTimeProps) => {
  //
  ////UI
  return (
    <p className="font-satoshi text-xs opacity-60 lg:text-sm">{shippingTime}</p>
  );
};

export default CartItemShippingTime;
