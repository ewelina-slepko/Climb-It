import React from 'react';
import Chart from '../ClimbingRoutes/Chart';
import { Route, Switch } from 'react-router-dom'
import CreateNewRoute from '../ClimbingRoutes/CreateNewRoute';
import RoutesList from '../ClimbingRoutes/RouteList';
import RouteDetails from '../ClimbingRoutes/RouteDetails';

class Dashboard extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Chart} exact />
                <Route path="/newroute" component={CreateNewRoute} />
                <Route path="/listofroutes" component={RoutesList} />
                <Route path="/project/:id" component={RouteDetails} />
            </Switch>
        )
    }
}

export default Dashboard;
