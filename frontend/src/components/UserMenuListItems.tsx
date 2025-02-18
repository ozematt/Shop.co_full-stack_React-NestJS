import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { memo, useCallback } from 'react';
import { logOutUser } from '../redux/userSlice';
import { clearCart } from '../redux/cartSlice';

type UserMenuListItemsProps = {
  onClick: () => void;
};

const UserMenuListItems = memo(({ onClick }: UserMenuListItemsProps) => {
  //
  ////DATA
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();

  const username =
    useSelector((state: RootState) => state.user.username) ||
    localStorage.getItem('user');

  ////LOGIC
  const handleLogOut = useCallback(() => {
    dispatch(logOutUser());
    dispatch(clearCart());
    navigate('/');
    onClick();
  }, [dispatch]);

  ////UI
  return (
    <>
      {' '}
      <li
        className="hover: cursor-pointer pb-2 pl-4 pt-2 font-satoshi hover:bg-white dark:text-white dark:hover:bg-zinc-700"
        onClick={() => {
          navigate(`account/${username}`);
          onClick();
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
    </>
  );
});

export default UserMenuListItems;
