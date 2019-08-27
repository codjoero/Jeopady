import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import logger from 'redux-logger';
import rootReducer from './reducers';
import App from './components/App';
import Category from './components/Category';
import './index.css';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/category' component={Category} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
