import { close } from '../assets';

type CloseButtonProps = {
  onClick: () => void;
};

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <img
      onClick={onClick}
      src={close}
      alt="close icon"
      width={16}
      height={16}
      className="cursor-pointer dark:invert"
    />
  );
};

export default CloseButton;
