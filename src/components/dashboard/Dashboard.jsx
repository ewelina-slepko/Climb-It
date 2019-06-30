import React from 'react';
import Chart from '../ClimbingRoutes/Chart';
import { Route, Switch } from 'react-router-dom'
import CreateNewRoute from '../ClimbingRoutes/CreateNewRoute';
import RoutesList from '../ClimbingRoutes/RouteList';
import RouteDetails from '../ClimbingRoutes/RouteDetails';
import SignIn from '../auth/SignIn';

class Dashboard extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Chart} exact />
                <Route path="/newroute" component={CreateNewRoute} />
                <Route path="/listofroutes" component={RoutesList} />
                <Route path="/project/:id" component={RouteDetails} />
                <Route path="/signin/" component={SignIn} />
            </Switch>
        )
    }
}


export default Dashboard;
