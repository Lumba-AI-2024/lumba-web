import { configureStore } from '@reduxjs/toolkit';

// import MoviesReducer from './MoviesReducers';
import  CardReducer from './CardReducers';

const store = configureStore({
  reducer: {
    card: CardReducer,
  },
});

export default store;

