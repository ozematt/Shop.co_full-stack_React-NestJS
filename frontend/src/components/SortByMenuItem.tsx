type SortByMenuItemProps = {
  onClick: () => void;
  option: string;
};

const SortByMenuItem = ({ onClick, option }: SortByMenuItemProps) => {
  //
  //UI
  return (
    <li
      className="relative z-50 cursor-pointer px-6 py-3 font-satoshi hover:bg-slate-200"
      onClick={onClick}
    >
      {option}
    </li>
  );
};

export default SortByMenuItem;
