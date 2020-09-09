import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/massa" component={() => <div>teste</div>} />
        <Route path="/tamanho" component={() => <div>teste</div>} />
        <Route path="/recheio" component={() => <div>teste</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
