import React from 'react';
import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const SignedInLinks = () => {
    const classes = useStyles();
    return (
        <>
            {[<NavLink to='/newroute' className={classes.link}>New Route</NavLink>,
            <NavLink to='/routeslist' className={classes.link}>Routes List</NavLink>].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
            <Divider />
            <ListItem button>
                <ListItemText>
                    <NavLink to='/logout' className={classes.link}>Log out</NavLink>
                </ListItemText>
            </ListItem>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: '#000'
    }
}));



export default SignedInLinks;
