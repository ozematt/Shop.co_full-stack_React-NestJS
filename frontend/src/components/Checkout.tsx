import { Footer, Newsletter } from '../sections';
import {
  Breadcrumbs,
  CheckoutShippingDetails,
  CheckoutSummary,
  SectionTitle,
} from './';

const Checkout = () => {
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
