import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

const AppRouter = ({ history }) => (
  <ConnectedRouter history={history}>
    <Suspense fallback={<p>loading...</p>}>
      <Switch>
        <Route exact path="/" component={lazy(() => import('@pages/Home'))} />
        <Route exact path="/new-deck" component={lazy(() => import('@pages/NewDeck'))} />
        <Route exact path="/details/:id" component={lazy(() => import('@pages/Details'))} />
      </Switch>
    </Suspense>
  </ConnectedRouter>
);

AppRouter.propTypes = {
  history: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.func,
      PropTypes.objectOf(PropTypes.string),
    ])
  ).isRequired,
};

export default hot(module)(AppRouter);
