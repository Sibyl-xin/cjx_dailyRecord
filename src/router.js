import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Calculator from './routes/Calculator'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/calculator" exact component={Calculator} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
