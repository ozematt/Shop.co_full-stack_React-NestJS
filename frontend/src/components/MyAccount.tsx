import { Footer, Newsletter } from '../sections';
import { user } from '../assets/index';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { Fragment, useEffect, useState } from 'react';
import { getDate } from '../lib/helpers';
import { useQuery } from '@tanstack/react-query';
import { logOutUser } from '../redux/userSlice';
import { Alert, Empty, UserInfo } from '.';
import { getOrder } from '../api/queries';

const MyAccount = () => {
  //
  ////DATA
  const username =
    useSelector((state: RootState) => state.user.username) ||
    localStorage.getItem('user');

  const dispatch: AppDispatch = useAppDispatch();

  const [validToken, setValidToken] = useState(true);
  ////LOGIC
  const {
    data: orders,
    refetch,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrder,
  });

  useEffect(() => {
    if (isError) {
      dispatch(logOutUser());
      setValidToken(false);
    }
    setValidToken(true);
  }, [isError, dispatch]);

  useEffect(() => {
    if (isSuccess) refetch();
  }, [username, isSuccess]);

  ////UI
  return (
    <>
      <section className="max-container mt-3 flex w-full gap-6 px-4 max-lg:flex-wrap sm:px-[100px]">
        {!validToken ? (
          <Alert
            url="login"
            title="Session Ended!"
            text="Your session has ended. For security and to protect your account,
            we’ve automatically logged you out. Please log in again to continue
            where you left off."
            buttonText="Login"
          />
        ) : null}

        <UserInfo />

        <div className="w-full rounded-[20px] px-7 py-5 ring-1 ring-black ring-opacity-10 md:px-9 md:py-7 dark:ring-white">
          <h6 className="font-integralCFBold text-2xl md:text-4xl">
            Purchase History
          </h6>
          <div className="border-b-[1px] py-2" />

          {orders?.length ? (
            orders.map((order) => (
              <div key={order.orderId} className="my-1">
                <p className="py-1 pt-3 font-satoshi opacity-60 max-md:text-sm md:py-2">
                  Date: {getDate(order.created_at)}
                </p>
                {order.items.map((item) => (
                  <Fragment key={item.itemId}>
                    <div className="my-1 flex">
                      <img
                        src={item.image}
                        alt="product image"
                        className="h-[140px] w-[130px] rounded-lg bg-grayBG object-contain md:h-[180px] md:w-[170px] dark:bg-zinc-900"
                      />
                      <div className="ml-5 space-y-1">
                        <p className="font-satoshi text-lg font-semibold md:text-2xl dark:opacity-90">
                          {item.product_name}
                        </p>
                        <p className="font-satoshi text-lg md:text-xl dark:opacity-50">
                          <span className="text-base md:text-lg">
                            {item.quantity} x
                          </span>{' '}
                          {item.price} $
                        </p>
                      </div>
                    </div>
                    <div className="my-4 mr-[70px] border-b-[1px] md:my-6 md:mr-[150px] dark:opacity-30" />
                  </Fragment>
                ))}
                <p className="mt-[-10px] font-satoshi text-xl font-bold md:text-2xl">
                  Total: {order.total}$
                </p>
                <div className="border-b-[1px] py-2" />
              </div>
            ))
          ) : (
            <Empty />
          )}
        </div>
      </section>{' '}
      <div className="max-container">
        {' '}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default MyAccount;
