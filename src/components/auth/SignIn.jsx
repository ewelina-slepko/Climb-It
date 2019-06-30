import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignIn = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <form noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Login"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <Button variant="contained" color="primary" className={classes.button}>
                    Sign In
                </Button>
            </form>
        </div>

    )
}

const useStyles = makeStyles(theme => ({
    container: {
        margin: '0 auto',
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 250,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: '50px 0 0 6px',
    },
    input: {
        display: 'none',
    },
}));

export default SignIn;
