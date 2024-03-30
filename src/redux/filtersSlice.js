import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filters: {
      language: 'all',
      level: 'all',
      price: 'all',
    },
  },
  reducers: {
    setFilter: (state, {payload}) => {
      state.filters = payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;