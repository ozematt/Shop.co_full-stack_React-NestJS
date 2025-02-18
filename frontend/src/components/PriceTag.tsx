import { memo } from 'react';

type ProceTagProps = {
  price: string;
  red?: boolean;
};
const PriceTag = memo(({ price, red }: ProceTagProps) => {
  return (
    <p
      className={`font-satoshi text-base font-bold ${red ? 'text-red-500' : null} sm:text-xl`}
    >
      {price}
    </p>
  );
});

export default PriceTag;
