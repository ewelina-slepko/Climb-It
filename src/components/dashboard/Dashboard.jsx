import React from 'react';
import AppBar from '../layouts/AppBar';
import RoutesList from '../ClimbingRoutes/RouteList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
    console.log(state)
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);
