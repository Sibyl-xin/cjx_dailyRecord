import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Calculator from './routes/Calculator'
import TreeTable from './routes/TreeTable'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/calculator" exact component={Calculator} />
        <Route path="/treeTable" exact component={TreeTable} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
