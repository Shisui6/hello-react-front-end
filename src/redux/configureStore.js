import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting/greeting';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;
