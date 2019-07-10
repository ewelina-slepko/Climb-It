import React from 'react';
import AppBar from '../layouts/AppBar';
import image from '../images/climb_hard.png';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const Chart = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar />

            <div className={classes.notification}>
                <h1 className={classes.text}>Add your climbing achievements to see the progress chart!</h1>
                <img src={image} className={classes.picture} />
                <Link to="/newroute" className={classes.link}>Add new route</Link>

            </div>

        </>
    )
}

const useStyles = makeStyles(theme => ({
    notification: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: 40,
        width: '70%',
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
        marginTop: 40,
        padding: 10,
        borderRadius: 10,
        textDecoration: 'none',
        textTransform: 'uppercase',
        opacity: '.7',
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
        margin: 30,
    },

}));

export default Chart;
