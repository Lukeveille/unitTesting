import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { counter } from'./reducers/counterReducer.js'
import { todos } from'./reducers/todos.js'
import { visibilityFilter } from'./reducers/visibilityFilter.js'

export default combineReducers({
  router: routerReducer,
  counter,
  todos,
  visibilityFilter,
});
