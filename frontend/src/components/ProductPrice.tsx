import { useDiscount } from '../lib/hooks';

type ProductPriceProps = {
  discountPercentage: number;
  price: number;
};

const ProductPrice = ({ discountPercentage, price }: ProductPriceProps) => {
  //
  ////DATA
  const { newPrice, discount } = useDiscount({ discountPercentage, price });

  ////UI
  return (
    <div className="flex items-center gap-[2px] pt-2 font-satoshi text-2xl font-bold">
      {' '}
      ${newPrice}
      {discount === 0 ? null : (
        <>
          <span className="mx-[-9px] scale-[0.65] line-through opacity-30">
            ${price}
          </span>
          <div className="h-[28px] w-[58px] rounded-[62px] bg-red-500 bg-opacity-10 py-[6.5px] text-center font-satoshi text-xs font-medium text-red-500 dark:bg-opacity-90 dark:text-white">
            -{discount}%
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPrice;
