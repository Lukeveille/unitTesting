import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from '../store'
import App from '../components/App.js'

describe('renders properly', () => {
  it('renders without crashing', () => {
    const history = createHistory();
    const store = configureStore(history);
    const div = document.createElement('div');
  
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App/>
        </ConnectedRouter>
      </Provider>,
      div
    );
  });
});