type ProceTagProps = {
  price: string;
  red?: boolean;
};
const PriceTag = ({ price, red }: ProceTagProps) => {
  return (
    <p
      className={`font-satoshi text-base font-bold ${red ? 'text-red-500' : null} sm:text-xl`}
    >
      {price}
    </p>
  );
};

export default PriceTag;
