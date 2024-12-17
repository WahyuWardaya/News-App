import { createSlice } from '@reduxjs/toolkit';

const savedSlice = createSlice({
  name: 'saved',
  initialState: {
    articles: [],
  },
  reducers: {
    saveArticle: (state, action) => {
      const exists = state.articles.some((article) => article._id === action.payload._id);
      if (!exists) {
        state.articles.push(action.payload);
      }
    },
    unsaveArticle: (state, action) => {
      state.articles = state.articles.filter((article) => article._id !== action.payload._id);
    },
  },
});

export const { saveArticle, unsaveArticle } = savedSlice.actions;
export default savedSlice.reducer;
