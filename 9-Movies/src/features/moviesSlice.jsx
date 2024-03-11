import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../services/apiCall";
const initialState = {
  movieList: [],
  loading: false,
  error: false,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  return await getMovies();
});

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMoviesList: (state) => {
      state.movieList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.movieList = payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearMoviesList } = moviesSlice.actions;
export default moviesSlice.reducer;
