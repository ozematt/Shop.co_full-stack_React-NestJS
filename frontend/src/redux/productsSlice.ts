import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  type ProductsInitialState,
  type Products,
  type SortMethod,
} from '../lib/types';
import { sortOptionsMap } from '../constants';

const initialState: ProductsInitialState = {
  sortOptions: {
    field: 'title',
    direction: 'asc',
  },
  filteredProductsByCategory: null,
  fetchedProducts: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0,
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<Products>) => {
      state.fetchedProducts = action.payload;
    },
    addCategorizedProducts: (state, action: PayloadAction<Products | null>) => {
      state.filteredProductsByCategory = action.payload;
    },

    addSortMethod: (state, action: PayloadAction<SortMethod>) => {
      const selectedOption = sortOptionsMap[action.payload];
      if (selectedOption) {
        state.sortOptions = { ...selectedOption };
      }
    },
  },
});

export const { addProducts, addCategorizedProducts, addSortMethod } =
  productsSlice.actions;

export default productsSlice.reducer;
