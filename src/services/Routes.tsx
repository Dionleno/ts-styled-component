import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import Register from '../containers/cadastrar';

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/cadastrar" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
