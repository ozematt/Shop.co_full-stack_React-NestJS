type FilterCategoryListItemProps = {
  onClick: () => void;
  category: string;
};

const FilterCategoryListItem = ({
  onClick,
  category,
}: FilterCategoryListItemProps) => {
  //
  ////UI
  return (
    <div
      className="flex items-center justify-between first:pt-6"
      onClick={onClick}
    >
      <p className="cursor-pointer pb-2 font-satoshi opacity-60 hover:opacity-100">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </p>
    </div>
  );
};

export default FilterCategoryListItem;
