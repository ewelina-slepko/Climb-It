import React from 'react';
import AppBar from '../layouts/AppBar';
import image from '../images/climb_hard.png';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

const Chart = (props) => {
    const { auth } = props;
    const classes = useStyles();
    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <div className={classes.container}>
            <AppBar />

            <div className={classes.wrapper}>
                <h1 className={classes.text}>Add your climbing achievements to see the progress chart!</h1>
                <div className={classes.mediaWrapper}>
                    <img src={image} className={classes.picture} />
                    <Link to="/newroute" className={classes.link}>Add new route</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
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
        opacity: '.5',
        transition: '.3s',
        "&:hover": {
            letterSpacing: 1,
            opacity: '.9'
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

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Chart);
