import React from 'react';
import AppBar from '../layouts/AppBar';
import Chart from '../ClimbingRoutes/Chart';

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <AppBar />
                <Chart />
            </>
        )
    }
}


export default Dashboard;
