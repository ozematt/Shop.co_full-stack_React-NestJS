import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type OrderData, type UserInitialState } from '../lib/types';

const initialState: UserInitialState = { username: null, orders: [] };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.username = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    setUsername: (state, action: PayloadAction<string>) => {
      const username = action.payload;
      state.username = username;
      localStorage.setItem('user', username);
    },
    addOrder: (state, action: PayloadAction<OrderData[]>) => {
      state.orders = [...state.orders, ...action.payload];
    },
  },
});
export const { logOutUser, addOrder, setUsername } = userSlice.actions;

export default userSlice.reducer;
