import React from 'react'
import AppBar from '../layouts/AppBar'
import image from '../images/climb_hard.png'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import MyChart from './MyChart'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const Chart = (props) => {
    const { auth, myProjects } = props;
    const classes = useStyles();
    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <div className={classes.container}>
            <AppBar />
            {myProjects && <MyChart />}


            {/* <div className={classes.wrapper}>
                <h1 className={classes.text}>Add your climbing achievements to see the progress chart!</h1>
                <div className={classes.mediaWrapper}>
                    <img src={image} className={classes.picture} />
                    <Link to="/newroute" className={classes.link}>Add new route</Link>
                </div>
            </div> */}
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: 40,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    mediaWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: '1',
        color: '#858282',
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 16,
        letterSpacing: 4,
        textTransform: 'uppercase',
        lineHeight: 2,
        maxWidth: 500
    },
    link: {
        position: 'absolute',
        color: '#fff',
        backgroundColor: '#858282',
        fontWeight: 'bold',

        padding: 10,
        borderRadius: 20,
        textDecoration: 'none',
        textTransform: 'uppercase',
        opacity: '.9',
        transition: '.3s',
        "&:hover": {
            letterSpacing: 1,
        },
    },
    picture: {
        flex: '1',
        position: 'relative',
        width: 400,
        maxWidth: 300,
        maxHeight: 300,
        margin: 40,
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
            where: [['author', '==', props.userId]],
            orderBy: ['createdAT', 'desc'],
        }
    ])
)(Chart);

