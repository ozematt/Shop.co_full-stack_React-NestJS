import { memo } from 'react';

const ProductTitle = memo(({ title }: { title: string }) => {
  //
  ////UI
  return (
    <p className="w-full max-w-[295px] pt-4 font-satoshi text-xl font-bold">
      {title.length > 25 ? title.slice(0, 25) + '...' : title}
    </p>
  );
});

export default ProductTitle;
