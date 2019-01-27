import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { counter } from'./reducers/reducers.js'

export default combineReducers({
  router: routerReducer,
  counter
});