import { hamburger } from '../assets';
import { useSlideMenu } from '../lib/hooks';
import { HamburgerListItems, Overlay, SlideMenuHeader } from '.';

const HamburgerMenu = () => {
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
      <div
        {...menuProps}
        className={`${menuOpen ? 'translate-x-0' : '-translate-x-full'} absolute left-0 top-0 z-50 h-[100vh] w-[50vw] transform bg-stone-100 shadow-lg transition-transform duration-300 sm:w-[40vw] lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] dark:dark:bg-zinc-800`}
      >
        <ul className="w-full p-4 text-xl text-black md:p-10">
          <SlideMenuHeader
            onCloseClick={() => setMenuOpen(false)}
            title="MENU"
          />
          <hr className="border-b-1 border-stone-400" />
          <HamburgerListItems onLinkClick={handleMenuItemClick} />
        </ul>
      </div>
    </>
  );
};

export default HamburgerMenu;
