import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { sortOptionsMap } from '../constants';
import { SortingOptions, SortMethod } from '../lib/types';

type FilterInitialState = {
  filterOpen: boolean;
  selectedCategory: string;
  sortOptions: SortingOptions;
};

const initialState: FilterInitialState = {
  filterOpen: false,
  selectedCategory: '',
  sortOptions: {
    field: 'title',
    direction: 'asc',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterOpen: (state) => {
      state.filterOpen = !state.filterOpen;
    },
    addSortMethod: (state, action: PayloadAction<SortMethod>) => {
      const selectedOption = sortOptionsMap[action.payload];
      if (selectedOption) {
        state.sortOptions = { ...selectedOption };
      }
    },
    addCategoryName: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});
export const { filterOpen, addCategoryName } = filterSlice.actions;

export default filterSlice.reducer;
