import { configureStore } from '@reduxjs/toolkit';
import savedSlice from './savedSlice';

const store = configureStore({
  reducer: {
    saved: savedSlice,
  },
});

export default store;
