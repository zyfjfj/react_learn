import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/HomeLayout';
import Users, {LoggingButton} from './routes/Users';
import Products from './routes/Products';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/users" component={Users} />
        <Route path="/111" component={LoggingButton} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
