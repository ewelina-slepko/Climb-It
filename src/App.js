import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateNewRoute from './components/ClimbingRoutes/CreateNewRoute';
import RoutesList from './components/ClimbingRoutes/RouteList';
import RouteDetails from './components/ClimbingRoutes/RouteDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <Redirect to="/signin" />} exact />
        <Route path="/signin/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/home" component={Dashboard} />
        <Route path="/newroute" component={CreateNewRoute} exact />
        <Route path="/listofroutes" component={RoutesList} />
        <Route path="/project/:id" component={RouteDetails} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
