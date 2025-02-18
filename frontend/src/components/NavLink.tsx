import { memo } from 'react';

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = memo(({ href, label }: NavLinkProps) => {
  //
  ////UI
  return (
    <li className="py-3 dark:text-white">
      <a href={href} className="hover:opacity-60">
        {label}
      </a>
    </li>
  );
});

export default NavLink;
