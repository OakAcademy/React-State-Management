import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNews } from "../apiCall/app";
const initialState = {
  newsList: [],
  loading: false,
  error: false,
};

export const getNews = createAsyncThunk("news/getNews", async () => {
  return await fetchNews();
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.newsList = payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearNewsList } = newsSlice.actions;
export default newsSlice.reducer;
