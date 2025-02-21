import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';
import { ButtonAddAddress, CheckoutAddressForm } from '.';
import { useQuery } from '@tanstack/react-query';
import { getUserAddresses } from '../api/queries';
import { CheckoutAddressForm as type } from './CheckoutAddressForm';

const CheckoutAddress = () => {
  //
  ////DATA

  const [addAddress, setAddAddress] = useState(false);

  const isAddress = useSelector(
    (state: RootState) => state.user.userAddressState,
  );
  const { data: userAddresses, isSuccess } = useQuery({
    queryKey: ['userAddresses'],
    queryFn: getUserAddresses,
  });

  ////UI
  return (
    <>
      <div
        className={`mt-4 hidden ${addAddress && 'flex'} items-center space-y-1 font-integralCFBold text-sm`}
      >
        <div
          onClick={() => setAddAddress(true)}
          className="grid h-[200px] w-[150px] cursor-pointer place-items-center rounded-[20px] font-satoshi text-9xl opacity-30 ring-1 ring-black hover:scale-95 hover:opacity-70 active:scale-100 dark:ring-white"
        >
          +
        </div>

        {!isAddress && (
          <h6 className="p-4 text-5xl opacity-30">
            Add <br /> Address
          </h6>
        )}
      </div>
      {addAddress && <CheckoutAddressForm />}
      <div className="mt-5 flex flex-wrap gap-5">
        {' '}
        <div className="h-[200px] w-fit rounded-[20px] p-6 ring-1 ring-white">
          {userAddresses?.map((address: type) => (
            <div className="font-satoshi text-lg">
              <p className="">{address.fullName}</p>
              <p>
                {address.street} {address.houseNumber}
              </p>
              <p>
                {address.city} {address.zipCode}
              </p>
              <p>{address.country}</p>
            </div>
          ))}
        </div>
        <ButtonAddAddress onClick={() => setAddAddress(true)} />
      </div>
    </>
  );
};

export default CheckoutAddress;
