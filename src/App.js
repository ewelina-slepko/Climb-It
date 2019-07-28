import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, Redirect } from 'react-router-dom'

import Dashboard from './components/dashboard/Dashboard'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateNewRoute from './components/ClimbingRoutes/CreateNewRoute'
import Home from './components/ClimbingRoutes/Home'
import About from './components/about/About'
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
        <Route path="/home" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/newroutesuccess" component={NewRouteConfirmation} />

      </Switch>
    </BrowserRouter>
  );
}
export default App;
