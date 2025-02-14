import { useEffect, useState } from 'react';
import { FilterApplyButton, FilterHeader, FilterPriceInput } from '.';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from '../redux/store';
import { addCategorizedProducts } from '../redux/productsSlice';
import { type ProductItemSchema } from '../lib/types';
import { filterOpen } from '../redux/filterSlice';

type FiltersPriceProps = {
  toggle: boolean;
  window?: boolean;
};

const FiltersPrice = ({ toggle, window }: FiltersPriceProps) => {
  //
  ////DATA
  const dispatch: AppDispatch = useAppDispatch();

  const [open, setOpen] = useState(true); //price filter open/close
  const [priceRange, setPriceRange] = useState({
    from: '',
    to: '',
  });

  const { fetchedProducts: allProducts, filteredProductsByCategory } =
    useSelector((state: RootState) => state.products);

  //toggle open state if filter icon was clicked
  useEffect(() => {
    if (toggle) return setOpen(true);
    setOpen(false);
  }, [toggle]);

  const filterByPriceRange = (
    products: ProductItemSchema[],
    from: number,
    to: number,
  ) =>
    products.filter((product) => product.price >= from && product.price <= to);

  const handleApplyFilter = () => {
    const actualProducts = filteredProductsByCategory || allProducts;

    const from = Number(priceRange.from) || 0;
    const to = Number(priceRange.to) || Infinity;

    if (from > to) {
      console.error("Invalid price range: 'from' cannot be greater than 'to'.");
      return;
    }

    //used helper function
    const priceRangedProducts = filterByPriceRange(
      actualProducts.products,
      from,
      to,
    );

    //creating relevant data to add
    const dataToAdd = {
      products: priceRangedProducts,
      total: priceRangedProducts.length,
      skip: 0,
      limit: 0,
    };
    if (window) dispatch(filterOpen());

    dispatch(addCategorizedProducts(dataToAdd));
  };

  return (
    <>
      <FilterHeader title="Price" onClick={() => setOpen(!open)} state={open} />
      {open && (
        <div className="mt-4 flex gap-2">
          <FilterPriceInput
            value={priceRange.from}
            name="from"
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <FilterPriceInput
            value={priceRange.to}
            name="to"
            onChange={(e) =>
              setPriceRange((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
      )}
      <hr className="mt-6 pb-6" />
      <FilterApplyButton onClick={handleApplyFilter} />
    </>
  );
};

export default FiltersPrice;
