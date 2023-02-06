import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
import data from '../data.json';

export const increment = createAction('myValueIncrement');

const myReducer = createReducer(data[1].discript, {
  [increment]: (state, action) => (state = action.payload),
});

const myRed = createReducer(data, {});

export const store = configureStore({
  reducer: {
    text: myReducer,
    data: myRed,
  },
});
