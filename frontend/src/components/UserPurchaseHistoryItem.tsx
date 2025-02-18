import { memo } from 'react';
import { OrderItem } from '../lib/types';

const UserPurchaseHistoryItem = memo(
  ({ image, productName, quantity, price }: OrderItem) => {
    //
    ////UI
    return (
      <div className="my-1 flex">
        <img
          src={image}
          alt="product image"
          className="h-[140px] w-[130px] rounded-lg bg-grayBG object-contain md:h-[180px] md:w-[170px] dark:bg-zinc-900"
        />
        <div className="ml-5 space-y-1">
          <p className="font-satoshi text-lg font-semibold md:text-2xl dark:opacity-90">
            {productName}
          </p>
          <p className="font-satoshi text-lg md:text-xl dark:opacity-50">
            <span className="text-base md:text-lg">{quantity} x</span> {price} $
          </p>
        </div>
      </div>
    );
  },
);

export default UserPurchaseHistoryItem;
