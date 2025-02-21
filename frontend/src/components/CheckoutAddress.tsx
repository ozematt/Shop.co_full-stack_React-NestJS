import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';
import { ButtonAddAddress, CheckoutAddressForm } from '.';
import { useQuery } from '@tanstack/react-query';
import { getUserAddresses } from '../api/queries';

type AddressFromDB = {
  fullName: string;
  street: string;
  houseNumber: string;
  city: string;
  zipCode: string;
  country: string;
  user_id: number;
  id: number;
};

const CheckoutAddress = () => {
  //
  ////DATA

  const [addAddress, setAddAddress] = useState(false);

  const isAddress = useSelector(
    (state: RootState) => state.user.userAddressState,
  );
  const { data: userAddresses } = useQuery({
    queryKey: ['userAddresses'],
    queryFn: getUserAddresses,
  });

  const handleAddressSelect = () => {};
  console.log(userAddresses);

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
      <div className="mt-5 flex gap-5">
        {' '}
        {userAddresses?.map((address: AddressFromDB) => (
          <div
            key={address.id}
            onClick={}
            className="h-[200px] w-fit cursor-pointer rounded-[20px] p-6 font-satoshi text-xl ring-1 ring-white transition-all hover:scale-95 active:scale-100"
          >
            <p className="font-bold">{address.fullName}</p>
            <p>
              {address.street} {address.houseNumber}
            </p>
            <p>
              {address.city} {address.zipCode}
            </p>
            <p>{address.country}</p>
          </div>
        ))}
        <ButtonAddAddress onClick={() => setAddAddress(true)} />
      </div>
    </>
  );
};

export default CheckoutAddress;
