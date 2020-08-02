import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from '@store/store';
import AppRouter from './router';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component history={history} />
    </Provider>,
    document.getElementById('app')
  );
};

render(AppRouter);

if (module.hot) {
  module.hot.accept('./router', () => {
    // eslint-disable-next-line global-require
    const NewAppRoot = require('./router').default;
    render(NewAppRoot);
  });
}
