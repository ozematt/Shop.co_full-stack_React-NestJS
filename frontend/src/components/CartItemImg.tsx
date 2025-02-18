import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

type CartItemImgProps = {
  image: string;
  category: string;
  title: string;
  id: number;
};

const CartItemImg = memo(({ image, category, title, id }: CartItemImgProps) => {
  //
  ////DATA
  const navigate = useNavigate();

  ////UI
  return (
    <img
      src={image}
      className="h-[99px] w-[99px] rounded-lg bg-grayBG object-contain lg:h-[124px] lg:w-[124px] dark:bg-zinc-900"
      onClick={() => navigate(`/shop/${category}/${title}?id=${id}`)}
    />
  );
});

export default CartItemImg;
