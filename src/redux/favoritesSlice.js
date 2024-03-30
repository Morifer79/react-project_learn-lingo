import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorites: (state, { payload }) => {
      state.favorites.push(payload);
      state.currentPage += 1;
    },
    removeFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        item => item.id !== payload
      );
    },
  },
});

export const { addFavorites, removeFavorites } = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;