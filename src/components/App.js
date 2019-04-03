import React from 'react';
import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';

const AsyncPage = React.lazy(() =>
  import(/* webpackChunkName: "AsyncPage" */ './AsyncPage'),
);
const NoPage = React.lazy(() =>
  import(/* webpackChunkName: "Nopage" */ './NoPage'),
);

const CalculatorContainer = React.lazy(() =>
  import('../containers/CalculatorContainer'),
);

const CounterContainer = React.lazy(() =>
  import('../containers/CounterContainer'),
);

const App = () => (
  <Router>
    <React.Suspense fallback={<div>loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/async" component={AsyncPage} />
        <Route path="/calculator" component={CalculatorContainer} />
        <Route path="/counter" component={CounterContainer} />
        <Route component={NoPage} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default hot(App);
