import { Footer, Newsletter } from '../sections';
import { UserInfo, UserPurchaseHistory } from '.';

const MyAccount = () => {
  //
  ////UI
  return (
    <>
      <section className="max-container mt-3 flex w-full gap-6 px-4 max-lg:flex-wrap sm:px-[100px]">
        <UserInfo />
        <div className="w-full rounded-[20px] px-7 py-5 ring-1 ring-black ring-opacity-10 md:px-9 md:py-7 dark:ring-white">
          <h6 className="font-integralCFBold text-2xl md:text-4xl">
            Purchase History
          </h6>
          <div className="border-b-[1px] py-2" />
          <UserPurchaseHistory />
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
