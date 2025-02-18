import { memo } from 'react';
import { SlideMenuHeader, UserMenuListItems } from '.';

type UserMenuProps = {
  open: boolean;
  close: () => void;
  menuProps: any;
};

const UserMenu = memo(({ open, close, menuProps }: UserMenuProps) => {
  //
  ////UI
  return (
    <div
      {...menuProps}
      className={`${open ? 'translate-x-0' : 'translate-x-full'} fixed right-[0] top-[0] z-50 h-[100vh] w-[50vw] transform bg-stone-100 shadow-lg transition-transform duration-300 lg:w-[30vw] xl:w-[20vw] 2xl:w-[15vw] dark:bg-zinc-800`}
    >
      <ul className="w-full p-4 text-xl text-black md:p-6">
        <SlideMenuHeader onCloseClick={close} title="User Panel" />

        <hr className="border-b-1 border-stone-400" />
        <UserMenuListItems onClick={close} />
      </ul>
    </div>
  );
});

export default UserMenu;
