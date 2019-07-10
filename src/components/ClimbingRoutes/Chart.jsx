import React from 'react';
import AppBar from '../layouts/AppBar';
import image from '../images/climb_hard.png';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { fontSize } from '@material-ui/system';

const Chart = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar />

            <div className={classes.notification}>
                <h1 className={classes.text}>Add your climbing achievements to see the progress chart!</h1>
                <img src={image} className={classes.picture} />
            </div>

        </>
    )
}

const useStyles = makeStyles(theme => ({
    notification: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: 60,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        flex: '1',
        color: '#858282',
        textAlign: 'center',
        padding: 20,
        fontSize: 16,
        letterSpacing: 4,
        maxWidth: 400
    },
    picture: {
        flex: '1',
        width: 400,
        maxWidth: 300,
        maxHeight: 300,
        margin: 50,
        "&:hover": {
            opacity: '.7'
        },
    },
}));

export default Chart;
