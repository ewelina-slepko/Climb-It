import React from 'react';
import Chart from './Chart';
import { Route, Switch } from 'react-router-dom'
import CreateNewRoute from '../ClimbingRoutes/CreateNewRoute';
import RoutesList from '../ClimbingRoutes/RoutesList';

class Dashboard extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Chart} exact />
                <Route path="/newroute" component={CreateNewRoute} exact />
                <Route path="/listofroutes" component={RoutesList} exact />
            </Switch>
        )
    }
}

export default Dashboard;
