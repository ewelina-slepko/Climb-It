import React from 'react'
import AppBar from '../layouts/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import image from '../images/thumbs_up.png'



const NewRouteConfirmation = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <AppBar />
            <div className={classes.wrapper}>
                <h1 className={classes.text}>Done!</h1>
                <img src={image} className={classes.picture} />
            </div>
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
    text: {
        flex: '1',
        color: '#858282',
        textAlign: 'center',
        paddingTop: 60,
        fontSize: 26,
        letterSpacing: 4,
        textTransform: 'uppercase',
        maxWidth: 500
    },
    picture: {
        flex: '1',
        position: 'relative',
        width: 300,
        maxWidth: 200,
        maxHeight: 200,
        margin: 40,
    },
}));

export default NewRouteConfirmation;
