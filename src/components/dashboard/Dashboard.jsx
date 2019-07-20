import React from 'react';
import AppBar from '../layouts/AppBar';
import RoutesList from '../ClimbingRoutes/RouteList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    render() {
        const { myProjects, auth } = this.props;

        if (!auth.uid) return <Redirect to="/signin" />
        return (
            <>
                <AppBar />
                {myProjects && <RoutesList />}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.firebase.auth.uid)
    console.log(state.firestore.ordered.myProjects)
    return {
        projects: state.firestore.ordered.projects,
        myProjects: state.firestore.ordered.myProjects,
        auth: state.firebase.auth,
        userId: state.firebase.auth.uid,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => [
        {
            collection: 'projects',
            storeAs: 'myProjects',
            where: [['author', '==', props.userId || null]],
            orderBy: ['createdAT', 'desc'],
        }
    ])
)(Dashboard);
