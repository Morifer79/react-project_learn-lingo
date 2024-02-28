import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    teachers: [],
    favorites: [],
    filter: {
      languages: '',
      levels: '',
      price: '',
    },
    loading: false,
    error: null,
  },
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites.push(payload);
      state.currentPage += 1;
    },
    removeFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        item => item.lessons_done !== payload.lessons_done
      );
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.teachers = payload;
      })
      .addCase(fetchData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const {
  setData,
  setLoading,
  setError,
  addFavorites,
  removeFavorites,
  setFilter,
} = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
