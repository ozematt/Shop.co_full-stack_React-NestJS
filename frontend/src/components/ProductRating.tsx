import { Rating } from '@mui/material';

const ProductRating = ({ rating }: { rating: number }) => {
  //
  ////UI
  return (
    <div className="flex pt-2">
      <Rating
        defaultValue={Math.round(rating * 2) / 2}
        precision={0.5}
        readOnly
      />{' '}
      <p className="pl-2 pt-1 font-satoshi text-sm">
        {Math.round(rating * 2) / 2}
        <span className="opacity-50">/5</span>
      </p>
    </div>
  );
};

export default ProductRating;
