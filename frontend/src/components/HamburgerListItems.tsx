import { navLinks } from '../constants';
import { useToggleTheme } from '../lib/hooks';
import { ThemeIcon } from '.';
import { memo } from 'react';

type HamburgerListItemsProps = {
  onLinkClick: (id: string) => void;
};

const HamburgerListItems = memo(({ onLinkClick }: HamburgerListItemsProps) => {
  //
  ////DATA
  const { themeToggle } = useToggleTheme();

  ////UI
  return (
    <>
      {' '}
      <li
        onClick={() => onLinkClick('')}
        className="hover: cursor-pointer pb-2 pl-4 pt-2 font-satoshi hover:bg-white dark:text-white dark:hover:bg-zinc-700"
      >
        Shop
      </li>
      {navLinks.map((link, index) => (
        <li
          key={index}
          onClick={() => onLinkClick(link.id)}
          className="cursor-pointer py-2 pl-4 font-satoshi hover:bg-white dark:text-white dark:hover:bg-zinc-700"
        >
          {link.label}
        </li>
      ))}
      <hr className="border-b-1 border-stone-400" />
      <li
        {...themeToggle}
        className="flex cursor-pointer items-center pb-2 pl-4 pt-2 font-satoshi hover:bg-white dark:text-white dark:hover:bg-zinc-700"
      >
        <div className="mr-2">
          <ThemeIcon isVisible />
        </div>{' '}
        Theme
      </li>
      ;
    </>
  );
});

export default HamburgerListItems;
