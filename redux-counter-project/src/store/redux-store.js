import { legacy_createStore as createStore } from 'redux';

const defaultState = {
  counter: 0,
};

function counterReducer(currState = defaultState, action) {
  if (action.type === 'increment') {
    return {
      counter: currState.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: currState.counter - 1,
    };
  }

  return currState;
}

const store = createStore(counterReducer);

export default store;
