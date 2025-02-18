import { memo } from 'react';
import { CloseButton } from '.';

type SlideMenuHeaderProps = {
  onCloseClick: () => void;
  title: string;
};

const SlideMenuHeader = memo(
  ({ onCloseClick, title }: SlideMenuHeaderProps) => {
    //
    ////UI
    return (
      <div className="flex justify-between px-4 pb-4 pt-4 font-bold dark:text-white">
        {title}
        <CloseButton onClick={onCloseClick} />
      </div>
    );
  },
);

export default SlideMenuHeader;
