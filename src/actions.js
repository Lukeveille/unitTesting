import {
  INITIALIZE,
  DECREMENT,
  INCREMENT
} from './actionTypes';

export const initialize = () => ({
  type: INITIALIZE
});

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
