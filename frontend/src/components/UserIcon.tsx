import { useCallback } from 'react';
import { userIcon } from '../assets';
import { useSlideMenu } from '../lib/hooks';
import { useNavigate } from 'react-router-dom';
import { Overlay, SlideMenuHeader, UserMenuListItems } from '.';

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

      <div
        {...menuProps}
        className={`${menuOpen ? 'translate-x-0' : 'translate-x-full'} fixed right-[0] top-[0] z-50 h-[100vh] w-[50vw] transform bg-stone-100 shadow-lg transition-transform duration-300 lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] dark:bg-zinc-800`}
      >
        <ul className="w-full p-4 text-xl text-black md:p-6">
          <SlideMenuHeader
            onCloseClick={() => setMenuOpen(false)}
            title="User Panel"
          />

          <hr className="border-b-1 border-stone-400" />
          <UserMenuListItems onClick={() => setMenuOpen(false)} />
        </ul>
      </div>
    </>
  );
};

export default UserIcon;
