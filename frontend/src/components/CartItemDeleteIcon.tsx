import { deleteIcon } from '../assets';

type CartItemDeleteIconProps = {
  onClick: () => void;
};

const CartItemDeleteIcon = ({ onClick }: CartItemDeleteIconProps) => {
  //
  ////UI
  return (
    <img
      src={deleteIcon}
      alt="trash can icon"
      onClick={onClick}
      className="cursor-pointer hover:opacity-70 max-lg:absolute max-sm:scale-[0.8]"
    />
  );
};

export default CartItemDeleteIcon;
