import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type OrderData, type UserInitialState } from '../lib/types';
import { AddressFromDB } from '../components/CheckoutAddress';
// import getUserAddresses from '../api/queries/getUserAddresses';

const initialState: UserInitialState = {
  username: null,
  userAddressState: false,
  selectedAddress: null,
  orders: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAddressState: (state, action: PayloadAction<boolean>) => {
      state.userAddressState = action.payload;
    },
    setAddress: (state, action: PayloadAction<AddressFromDB>) => {
      state.selectedAddress = action.payload;
    },
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
export const {
  logOutUser,
  addOrder,
  setUsername,
  setUserAddressState,
  setAddress,
} = userSlice.actions;

export default userSlice.reducer;
