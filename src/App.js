import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateNewRoute from './components/ClimbingRoutes/CreateNewRoute'
import Chart from './components/ClimbingRoutes/Chart'
import NewRouteConfirmation from './components/ClimbingRoutes/NewRouteConfirmation';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <Redirect to="/signin" />} exact />
        <Route path="/signin/" component={SignIn} />
        <Route path="/signup/" component={SignUp} />
        <Route path="/listofroutes" component={Dashboard} />
        <Route path="/newroute" component={CreateNewRoute} exact />
        <Route path="/home" component={Chart} />
        <Route path="/newroutesuccess" component={NewRouteConfirmation} />

      </Switch>
    </BrowserRouter>
  );
}
export default App;
