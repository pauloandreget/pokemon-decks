import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(
  combineReducers({ ...reducers, router: connectRouter(history) }),
  enhancer
);

sagaMiddleware.run(sagas);

export { store, history };
