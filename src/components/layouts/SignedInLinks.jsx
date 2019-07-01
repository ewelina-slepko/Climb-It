import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const arr = [
    { text: 'New Route', path: '/newroute' },
    { text: 'List of Routes', path: '/listofroutes' }
];

const SignedInLinks = () => {
    return (
        <>
            {arr.map((obj, index) => (
                <ListItem component={Link} to={obj.path} button key={index}>
                    <ListItemText>
                        {obj.text}
                    </ListItemText>
                </ListItem>
            ))}
            <Divider />
            <ListItem component={Link} to='/logout' button key='logout'>
                <ListItemText>
                    Log out
                </ListItemText>
            </ListItem>
        </>
    );
}

export default SignedInLinks;
