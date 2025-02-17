import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { user } from '../assets/index';

const UserInfo = () => {
  //
  ////DATA
  const username =
    useSelector((state: RootState) => state.user.username) ||
    localStorage.getItem('user');

  ////UI
  return (
    <div className="flex max-h-[400px] w-1/3 shrink-0 flex-col items-center rounded-[20px] py-5 ring-1 ring-black ring-opacity-10 max-lg:w-full md:py-7 dark:ring-white">
      <img
        src={user}
        alt="avatar"
        className="h-[150px] w-[150px] rounded-full bg-grayBG object-contain opacity-80 md:h-[200px] md:w-[200px] dark:bg-zinc-900 dark:bg-opacity-30 dark:opacity-100 dark:invert"
      />

      <p className="mt-2 font-satoshi text-2xl font-medium opacity-60 dark:opacity-100">
        {username}
      </p>
    </div>
  );
};

export default UserInfo;
