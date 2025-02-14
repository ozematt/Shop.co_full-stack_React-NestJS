const CheckoutAddress = () => {
  //
  ////UI
  return (
    <div className="mt-4 space-y-1 font-satoshi text-sm">
      <p className="pb-1 text-xl font-bold">User data will be here.</p>
      <p>
        <span className="font-medium">City:</span>{' '}
        {/* {userData?.address?.city} */}
      </p>
      <p>
        <span className="font-medium">Address:</span>{' '}
        {/* {userData?.address?.address} */}
      </p>
      <p>
        <span className="font-medium">Postal Code:</span>{' '}
        {/* {userData?.address?.postalCode} */}
      </p>
      <p>
        <span className="font-medium">Country:</span>{' '}
        {/* {userData?.address?.country} */}
      </p>
      <p>
        <span className="font-medium">State:</span>{' '}
        {/* {userData?.address?.state} */}
      </p>
    </div>
  );
};

export default CheckoutAddress;
