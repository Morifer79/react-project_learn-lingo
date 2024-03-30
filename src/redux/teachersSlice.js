import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from './operations';

const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    teachers: [],
    loading: false,
    error: null,
  },
  reducers: {},
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
} = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
