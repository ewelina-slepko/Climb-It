import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../images/climbing_men.jpg'
import clsx from 'clsx'

const RouteListInfo = (props) => {
    const classes = useStyles();
    return (
        <div className={window.innerWidth < 992 ? clsx(classes.background, classes.backgroundMobile) : classes.background}>
            <div className={window.innerWidth < 992 ? classes.containerCenter : classes.containerRight}>
                <div className={classes.wrapper}>
                    <h1 className={classes.text}>Add your climbing achievements to see {props.section} {props.sectionStatistics}</h1>
                    <div className={classes.mediaWrapper}>
                        <Link to="/newroute" className={classes.link}>Add your first route!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    containerCenter: {
        margin: '0 auto',
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '130px 50px',

    },
    containerRight: {
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        paddingTop: 100,
        margin: '0px 300px 0px auto'
    },
    background: {
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        opacity: '0.5'
    },
    backgroundMobile: {
        backgroundPosition: '-200px'
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginTop: 20,
        width: '100%',
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
        color: '#000',
        textAlign: 'center',
        paddingTop: 10,
        fontSize: 20,
        letterSpacing: 4,
        textTransform: 'uppercase',
        lineHeight: 2,
        maxWidth: 500
    },
    link: {
        color: '#fff',
        backgroundColor: '#000',
        fontWeight: 'bold',
        marginTop: 20,
        padding: 12,
        borderRadius: 20,
        textDecoration: 'none',
        textTransform: 'uppercase',
        opacity: '.9',
        transition: '.3s',
        "&:hover": {
            letterSpacing: 1,
        },
    },
}));

export default RouteListInfo;
