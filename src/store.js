// import { createStore } from 'redux'
// import { counter } from './reducers/reducers.js'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import reducer from './reducer'
import sagas from './sagas'

export default function configureStore (history) {
  const sagaMiddleware = createSagaMiddleware()
  let middleware = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history)
  )
  /* Incorporate Redux Dev Tools */
  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension())
    }
  }

  const store = createStore(reducer, middleware)
  sagaMiddleware.run(sagas)
  // console.log(store.subscribe(counter))
  console.log(store.getState());
  
  console.log(store.dispatch({ type: 'INCREMENT' }));

  console.log(store.getState());
  // console.log(store.replaceReducer())
  return store
}

