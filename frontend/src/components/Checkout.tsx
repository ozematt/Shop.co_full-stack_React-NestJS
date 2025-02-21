import { useQuery } from '@tanstack/react-query';
import { Footer, Newsletter } from '../sections';
import {
  Breadcrumbs,
  CheckoutShippingDetails,
  CheckoutSummary,
  SectionTitle,
} from './';
import { getUserAddresses } from '../api/queries';
import { useEffect } from 'react';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { setUserAddressState } from '../redux/userSlice';
import { useSelector } from 'react-redux';

const Checkout = () => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  const address = useSelector(
    (state: RootState) => state.user.userAddressState,
  );
  // console.log(address);

  const { data: userAddresses, isSuccess } = useQuery({
    queryKey: ['userAddresses'],
    queryFn: getUserAddresses,
  });

  // console.log(isSuccess);

  ////LOGIC
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserAddressState(true));
    } else {
      dispatch(setUserAddressState(false));
    }
  }, [dispatch, isSuccess]);

  //
  ////UI
  return (
    <>
      <section className="max-container relative px-4 sm:px-[100px]">
        {' '}
        <Breadcrumbs />
        <div>
          <div className="mt-[8px] sm:mt-[24px]">
            <SectionTitle title="Finalization" />
          </div>
          <div className="mt-[20px] flex flex-wrap justify-center gap-[20px] sm:mt-[24px]">
            <CheckoutShippingDetails />
            <CheckoutSummary />
          </div>
        </div>
      </section>
      <div className="max-container">
        {' '}
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Checkout;
