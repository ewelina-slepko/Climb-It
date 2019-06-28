import React from 'react';
import Chart from './Chart';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-container">
                <Chart />
            </div>
        )
    }
}

export default Dashboard;
