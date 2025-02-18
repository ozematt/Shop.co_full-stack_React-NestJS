import { memo } from 'react';

type SubduedTextProps = {
  text: string;
  show?: boolean;
  discount?: number;
};

const SubduedText = memo(({ text, show, discount }: SubduedTextProps) => {
  //
  ////UI
  return (
    <p className="font-satoshi text-base opacity-60 sm:text-xl">
      {text} {show ? <span>(-{discount}%)</span> : null}
    </p>
  );
});

export default SubduedText;
