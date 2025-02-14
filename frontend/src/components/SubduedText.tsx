type SubduedTextProps = {
  text: string;
  show?: boolean;
  discount?: number;
};

const SubduedText = ({ text, show, discount }: SubduedTextProps) => {
  //
  ////UI
  return (
    <p className="font-satoshi text-base opacity-60 sm:text-xl">
      {text} {show ? <span>(-{discount}%)</span> : null}
    </p>
  );
};

export default SubduedText;
