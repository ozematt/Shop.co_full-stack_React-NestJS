import { hamburger } from '../assets';
import { useSlideMenu } from '../lib/hooks';
import { Overlay } from '.';
import { Suspense, lazy } from 'react';

const LazyHamburgerMenu = lazy(() => import('./HamburgerMenu'));

const HamburgerMenuIcon = () => {
  //
  ////DATA
  const { menuOpen, setMenuOpen, toggleMenu, handleMenuItemClick, menuProps } =
    useSlideMenu();

  ////UI
  return (
    <>
      <img
        src={hamburger}
        alt="hamburger menu"
        width={24}
        height={24}
        onClick={toggleMenu}
        className="mr-4 min-w-[24px] cursor-pointer pb-[6px] hover:opacity-60 sm:min-w-[30px] min-[1192px]:hidden dark:invert"
      />
      <Overlay onClick={() => setMenuOpen(false)} open={menuOpen} />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHamburgerMenu
          open={menuOpen}
          close={() => setMenuOpen(false)}
          onItemClick={handleMenuItemClick}
          menuProps={menuProps}
        />
      </Suspense>
    </>
  );
};

export default HamburgerMenuIcon;
