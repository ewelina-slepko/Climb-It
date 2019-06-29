import React from 'react';
import { NavLink } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const arr = [
    { text: 'Chart', path: '/' },
    { text: 'New Route', path: '/newroute' },
    { text: 'List of Routes', path: '/listofroutes' }
];

const SignedInLinks = () => {
    const classes = useStyles();
    return (
        <>
            {arr.map((obj, index) => (
                <ListItem component={NavLink} to={obj.path} className={classes.link} button key={index}>
                    <ListItemText>
                        {obj.text}
                    </ListItemText>
                </ListItem>
            ))}
            <Divider />
            <ListItem component={NavLink} to='/logout' className={classes.link} button key='logout'>
                <ListItemText>
                    Log out
                </ListItemText>
            </ListItem>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    link: {
        textDecoration: 'none',
        color: '#000',
    }
}));

export default SignedInLinks;
