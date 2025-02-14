import { useCallback } from 'react';
import { userIcon } from '../assets';
import { useMenuOpen } from '../lib/hooks';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { logOutUser } from '../redux/userSlice';
import { clearCart } from '../redux/cartSlice';
import { CloseButton, Overlay } from '.';

const UserIcon = () => {
  //
  ////DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const token = localStorage.getItem('token');

  const username =
    useSelector((state: RootState) => state.user.username) ||
    localStorage.getItem('user');

  //custom hook
  const { menuOpen, setMenuOpen, menuProps } = useMenuOpen();

  ////LOGIC
  const handleUserPanel = useCallback(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    setMenuOpen((prevState) => !prevState);
  }, [token, navigate]);

  const handleLogOut = useCallback(() => {
    dispatch(logOutUser());
    dispatch(clearCart());
    setMenuOpen(false);
    navigate('/');
  }, []);

  ////UI
  return (
    <>
      <img
        src={userIcon}
        alt="user icon"
        width={24}
        height={24}
        onClick={handleUserPanel}
        className="cursor-pointer hover:opacity-60 dark:invert"
      />
      <Overlay onClick={() => setMenuOpen(false)} open={menuOpen} />

      <div
        {...menuProps}
        className={`${menuOpen ? 'translate-x-0' : 'translate-x-full'} fixed right-[0] top-[0] z-50 h-[100vh] w-[50vw] transform bg-stone-100 shadow-lg transition-transform duration-300 lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] dark:bg-zinc-800`}
      >
        <ul className="w-full p-4 text-xl text-black md:p-6">
          <div className="flex justify-between px-4 pb-4 pt-4 font-bold dark:text-white">
            User Panel
            <CloseButton onClick={() => setMenuOpen(false)} />
          </div>
          <hr className="border-b-1 border-stone-400" />

          <li
            className="hover: cursor-pointer pb-2 pl-4 pt-2 font-satoshi hover:bg-white dark:text-white dark:hover:bg-zinc-700"
            onClick={() => {
              navigate(`account/${username}`);
              setMenuOpen(false);
            }}
          >
            My Account
          </li>

          <li
            className="hover: cursor-pointer pb-2 pl-4 pt-2 font-satoshi hover:bg-white dark:text-white dark:hover:bg-zinc-700"
            onClick={handleLogOut}
          >
            {' '}
            Log Out
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserIcon;
