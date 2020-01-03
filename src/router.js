import React from 'react';
import { Router, Route, Switch } from 'dva/router';

import App from './routes/App';
import BlockChainSettings from './routes/BlockChainSettings'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/" exact component={BlockChainSettings} />
        </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;
