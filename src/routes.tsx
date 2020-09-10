import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/step-one" component={StepOne} />
        <Route path="/step-two" component={StepTwo} />
        <Route path="/step-three" component={StepThree} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
