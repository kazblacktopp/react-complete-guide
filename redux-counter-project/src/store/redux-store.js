import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(currState) {
      currState.counter++;
    },

    decrement(currState) {
      currState.counter--;
    },

    increase(currState, action) {
      currState.counter = currState.counter + action.payload;
    },

    toggleCounter(currState) {
      currState.showCounter = !currState.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
