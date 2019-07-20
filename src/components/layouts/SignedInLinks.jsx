import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const arr = [
    { text: 'New Route', path: '/newroute' },
    { text: 'List of Routes', path: '/listofroutes' },
    { text: 'My Chart', path: '/home' }
];

const SignedInLinks = (props) => {
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
            <ListItem component={Link} to='/signin' button key='logout' onClick={props.signOut}>
                <ListItemText>
                    Log out
                </ListItemText>
            </ListItem>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
