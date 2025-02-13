import { Footer, Newsletter } from '../sections';
import { Breadcrumbs, CartItemsList, CartTotals, SectionTitle } from './';

const Cart = () => {
  //
  ////UI
  return (
    <>
      {' '}
      <section className="max-container px-4 sm:px-[100px]">
        <div className="border-b-2" />
        <Breadcrumbs />
        <div>
          <div className="mt-[8px] sm:mt-[24px]">
            <SectionTitle title="your cart" />
          </div>
          <div className="mt-[20px] flex flex-wrap gap-[20px] sm:mt-[24px] min-[1454px]:flex-nowrap">
            <CartItemsList />
            <CartTotals />
          </div>
        </div>
      </section>
      <div className="max-container">
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Cart;
