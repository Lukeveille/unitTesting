import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { counter } from'./reducers.js'

// export function counter(state = 0, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }

export default combineReducers({
  router: routerReducer,
  counter
});