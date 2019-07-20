import React from 'react'
import AppBar from '../layouts/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import MyChart from './MyChart'
import ChartInfo from './ChartInfo'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const Chart = (props) => {
    const { auth, myProjects } = props;
    const classes = useStyles();
    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <div className={classes.container}>
            <AppBar />
            {myProjects && (myProjects.length > 0 ? <MyChart /> : <ChartInfo />)}

        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
    },
}));

const mapStateToProps = (state) => {
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
)(Chart);

