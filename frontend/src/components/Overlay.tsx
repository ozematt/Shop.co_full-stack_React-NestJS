import { memo } from 'react';

type OverlayProps = {
  onClick: () => void;
  open: boolean;
};

const Overlay = memo(({ onClick, open }: OverlayProps) => {
  //
  ////UI
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 z-10 h-[100vh] bg-black/50 transition-opacity duration-300 ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    />
  );
});

export default Overlay;
