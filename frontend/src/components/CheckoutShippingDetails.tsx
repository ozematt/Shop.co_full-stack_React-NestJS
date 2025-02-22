import { CheckoutAddress, SectionSubtitle } from '.';

const CheckoutShippingDetails = () => {
  //
  ////UI
  return (
    <div className="h-full w-full rounded-[20px] ring-1 ring-black ring-opacity-10 min-[1454px]:max-w-[715px] dark:ring-white">
      <div className="px-6 pb-[33px] pt-[20px]">
        <div className="">
          <SectionSubtitle title="Shipping recipient details:" />
          <p className="pt-6">SELECT ADDRESS</p>
        </div>
        <div className="border-b-[1px] pt-6" />
        <CheckoutAddress />
      </div>
    </div>
  );
};

export default CheckoutShippingDetails;
