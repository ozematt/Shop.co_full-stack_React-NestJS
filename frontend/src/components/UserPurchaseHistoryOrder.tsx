import { Fragment } from 'react/jsx-runtime';
import { getDate } from '../lib/helpers';
import { UserPurchaseHistoryItem } from '.';
import { OrdersT } from '../lib/types';
import { memo } from 'react';

const UserPurchaseHistoryOrder = memo(
  ({ orderItems, createdAt, total }: OrdersT) => {
    //
    ////UI
    return (
      <div className="my-1">
        <p className="py-1 pt-3 font-satoshi opacity-60 max-md:text-sm md:py-2">
          Date: {getDate(createdAt)}
        </p>

        {orderItems.map((item) => (
          <Fragment key={item.id}>
            <UserPurchaseHistoryItem {...item} />
            <div className="my-4 mr-[70px] border-b-[1px] md:my-6 md:mr-[150px] dark:opacity-30" />
          </Fragment>
        ))}
        <p className="mt-[-10px] font-satoshi text-xl font-bold md:text-2xl">
          Total: {total}$
        </p>
        <div className="border-b-[1px] py-2" />
      </div>
    );
  },
);

export default UserPurchaseHistoryOrder;
