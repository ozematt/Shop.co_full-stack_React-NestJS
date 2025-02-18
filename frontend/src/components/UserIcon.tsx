import { Suspense, lazy, useCallback } from 'react';
import { userIcon } from '../assets';
import { useSlideMenu } from '../lib/hooks';
import { useNavigate } from 'react-router-dom';
import { Overlay } from '.';

const LazyUserMenu = lazy(() => import('./UserMenu'));

const UserIcon = () => {
  //
  ////DATA
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  //custom hook
  const { menuOpen, setMenuOpen, menuProps } = useSlideMenu();

  ////LOGIC
  const handleUserPanel = useCallback(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    setMenuOpen((prevState) => !prevState);
  }, [token, navigate]);

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
      <Suspense fallback={<div>Loading...</div>}>
        <LazyUserMenu
          open={menuOpen}
          close={() => setMenuOpen(false)}
          menuProps={menuProps}
        />
      </Suspense>
    </>
  );
};

export default UserIcon;
