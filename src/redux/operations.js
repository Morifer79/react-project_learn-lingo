import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDatabase, ref, get } from 'firebase/database';
import toast from 'react-hot-toast';

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (_, { rejectWithValue }) => {
    try {
      const db = getDatabase();
      const dataRef = ref(db);
      const snapshot = await get(dataRef);
      const data = snapshot.val();
      if (data) {
        return Object.keys(data).map(key => ({ id: key, ...data[key] }));
      }
    } catch (error) {
      toast.error('No data! Something went wrong.', {
        duration: 5000,
        position: 'top-right',
      });
      return rejectWithValue(error.message);
    }
  }
);