import { memo } from 'react';

type FilterPriceInputProps = {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterPriceInput = memo(
  ({ value, name, onChange }: FilterPriceInputProps) => {
    //
    ////UI
    return (
      <input
        value={value}
        name={name}
        onChange={onChange}
        type="text"
        className="h-7 w-full max-w-[120px] rounded-sm pl-2 ring-1 ring-black ring-opacity-20 placeholder:text-sm focus:outline-none focus:ring-black dark:bg-zinc-700"
        placeholder={`${name}:`}
      />
    );
  },
);

export default FilterPriceInput;
