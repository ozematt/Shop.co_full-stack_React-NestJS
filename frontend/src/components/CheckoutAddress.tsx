import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';
import { CheckoutAddressForm } from '.';

const CheckoutAddress = () => {
  //
  ////DATA

  const [addAddress, setAddAddress] = useState(false);

  const isAddress = useSelector(
    (state: RootState) => state.user.userAddressState,
  );

  ////UI
  return (
    <div className="mt-4 flex items-center space-y-1 font-integralCFBold text-sm">
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
      {addAddress && <CheckoutAddressForm />}
    </div>
  );
};

export default CheckoutAddress;

// <p className="pb-1 text-xl font-bold">User data will be here.</p>
// <p>
//   <span className="font-medium">City:</span>{' '}

// </p>
// <p>
//   <span className="font-medium">Address:</span>{' '}

// </p>
// <p>
//   <span className="font-medium">Postal Code:</span>{' '}

// </p>
// <p>
//   <span className="font-medium">Country:</span>{' '}

// </p>
// <p>
//   <span className="font-medium">State:</span>{' '}

// </p>
