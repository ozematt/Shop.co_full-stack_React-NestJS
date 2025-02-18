import { useQuery } from '@tanstack/react-query';
import { getOrder } from '../api/queries';
import { useEffect, useState } from 'react';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { logOutUser } from '../redux/userSlice';
import { useSelector } from 'react-redux';
import { Alert, Empty, UserPurchaseHistoryOrder } from '.';

const UserPurchaseHistory = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();
  const username =
    useSelector((state: RootState) => state.user.username) ||
    localStorage.getItem('user');

  const [validToken, setValidToken] = useState(true);

  const {
    data: orders,
    refetch,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrder,
  });

  ////LOGIC
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
      {orders?.length ? (
        orders.map((order) => (
          <UserPurchaseHistoryOrder key={order.id} {...order} />
        ))
      ) : (
        <Empty />
      )}
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
    </>
  );
};

export default UserPurchaseHistory;
