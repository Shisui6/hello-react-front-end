// Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Base URL
const URL = 'http://localhost:3000/api/v1/messages';

export const fetchGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    const response = await fetch(URL, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const json = await response.json();

    return json.data;
  },
);

export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greetings: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state) => {
      const state1 = state;
      state1.isLoading = true;
      state1.hasError = false;
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      const state1 = state;
      state1.greetings = action.payload;
      state1.isLoading = false;
      state1.hasError = false;
    },
    [fetchGreetings.rejected]: (state) => {
      const state1 = state;
      state1.isLoading = false;
      state1.hasError = true;
    },
  },
});

// Selectors
export const selectGreetings = (state) => state.greetings.greetings;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectHasError = (state) => state.books.hasError;

export default greetingsSlice.reducer;
