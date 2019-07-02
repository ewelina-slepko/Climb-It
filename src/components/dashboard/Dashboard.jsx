import React from 'react';
import AppBar from '../layouts/AppBar';
import RoutesList from '../ClimbingRoutes/RouteList';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    render() {
        const { projects } = this.props;
        return (
            <>
                <AppBar />
                <RoutesList projects={projects} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard);
