type CartItemTitleProps = {
  title: string;
};

const CartItemTitle = ({ title }: CartItemTitleProps) => {
  //
  ////UI
  return (
    <h6 className="font-satoshi text-base font-bold lg:text-xl">{title}</h6>
  );
};

export default CartItemTitle;
