import React from 'react';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const SignedOutLinks = () => (
    <>
        <ListItem component={Link} to='/signin' button key='signin'>
            <ListItemText>
                Sign In
                </ListItemText>
        </ListItem>

        <ListItem component={Link} to='/signup' button key='signup'>
            <ListItemText>
                Sign up
                </ListItemText>
        </ListItem>
    </>
)


export default SignedOutLinks;
