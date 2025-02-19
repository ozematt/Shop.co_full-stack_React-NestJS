import { user } from '../assets/index';

const UserInfo = () => {
  //
  ////DATA

  ////UI
  return (
    <div className="flex w-1/3 shrink-0 flex-col items-center rounded-[20px] py-5 ring-1 ring-black ring-opacity-10 max-lg:w-full md:py-7 dark:ring-white">
      <img
        src={user}
        alt="avatar"
        className="h-[150px] w-[150px] rounded-full bg-grayBG object-contain opacity-80 md:h-[200px] md:w-[200px] dark:bg-zinc-900 dark:bg-opacity-30 dark:opacity-100 dark:invert"
      />
      <p className="mt-2 font-satoshi text-2xl font-medium opacity-60 dark:opacity-100">
        User email
      </p>
      <button className="action:scale-100 mt-[-30px] cursor-pointer rounded-full border px-[80px] py-[15px] transition duration-200 ease-in-out hover:scale-95 max-sm:w-full sm:mt-[36px]">
        User Details
      </button>
      {/* User Details */}
      <div className="mt-9 flex items-start justify-start gap-3">
        <div className="flex w-[90px] flex-col items-end gap-2 font-satoshi">
          {' '}
          <p>Username:</p>
          <p>First Name: </p>
          <p>Last Name: </p>
          <p>Age: </p>
          <p>Gender:</p>
        </div>
        <div className="flex w-[130px] flex-col items-start gap-2 font-satoshi">
          <p>Username</p>
          <p>First Name </p>
          <p>Last Name</p>
          <p>Age </p>
          <p>Gender</p>
        </div>
      </div>
      <button className="action:scale-100 mt-5 cursor-pointer rounded-full border bg-orange-500 px-[50px] py-[10px] transition duration-200 ease-in-out hover:scale-95 max-sm:w-full">
        Edit
      </button>
      {/* set user details */}{' '}
      {/* <div className="flex flex-col gap-4 pt-5 font-satoshi">
        <input
          type="text"
          placeholder="Username"
          className="mt-5 h-[40px] w-[230px] rounded-full bg-grayBG pl-8 focus:outline-orange-500 max-sm:placeholder:text-[14px] dark:text-black"
        />
        <input
          type="text"
          placeholder="First Name"
          className="h-[40px] w-[230px] rounded-full bg-grayBG pl-8 focus:outline-orange-500 max-sm:placeholder:text-[14px] dark:text-black"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="h-[40px] w-[230px] rounded-full bg-grayBG pl-8 focus:outline-orange-500 max-sm:placeholder:text-[14px] dark:text-black"
        />
        <div className="flex items-center gap-2">
          <p>Age:</p>
          <input
            type="number"
            className="h-8 w-[50px] rounded-full bg-grayBG pl-3 focus:outline-orange-500 dark:text-black"
          />
        </div>
        <div className="flex gap-2">
          {' '}
          <p>Gender:</p>{' '}
          <button className="w-[30px] rounded-full ring-1 ring-black dark:ring-white">
            M
          </button>
          <button className="w-[30px] rounded-full ring-1 ring-black dark:ring-white">
            F
          </button>
        </div>
        <button className="action:scale-100 mt-[-30px] cursor-pointer rounded-full border bg-orange-500 px-[50px] py-[10px] transition duration-200 ease-in-out hover:scale-95 max-sm:w-full sm:mt-[36px]">
          Add details
        </button>
      </div> */}
    </div>
  );
};

export default UserInfo;

//{firstName} {lastName}
