import React from 'react';
import AppBar from '../layouts/AppBar';
import RoutesList from '../ClimbingRoutes/RouteList';
import Info from '../ClimbingRoutes/Info'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

class Dashboard extends React.Component {
    render() {
        const { myProjects, auth } = this.props;
        const section = 'the list of routes'
        if (!auth.uid) return <Redirect to="/signin" />
        return (
            <>
                <AppBar />
                {myProjects && (myProjects.length > 0 ? <RoutesList /> : <Info section={section} />)}
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
            orderBy: ['date', 'desc'],
            where: [['author', '==', props.userId || null]],

        }
    ])
)(Dashboard);
