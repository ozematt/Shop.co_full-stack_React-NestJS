import { memo } from 'react';
import { HamburgerListItems, SlideMenuHeader } from '.';

type HamburgerMenuProps = {
  open: boolean;
  close: () => void;
  onItemClick: () => void;
  menuProps: any;
};

const HamburgerMenu = memo(
  ({ open, close, onItemClick, menuProps }: HamburgerMenuProps) => {
    //
    ////UI
    return (
      <div
        {...menuProps}
        className={`${open ? 'translate-x-0' : '-translate-x-full'} absolute left-0 top-0 z-50 h-[100vh] w-[50vw] transform bg-stone-100 shadow-lg transition-transform duration-300 sm:w-[40vw] lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] dark:dark:bg-zinc-800`}
      >
        <ul className="w-full p-4 text-xl text-black md:p-10">
          <SlideMenuHeader onCloseClick={close} title="MENU" />
          <hr className="border-b-1 border-stone-400" />
          <HamburgerListItems onLinkClick={onItemClick} />
        </ul>
      </div>
    );
  },
);

export default HamburgerMenu;
