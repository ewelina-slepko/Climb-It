import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        password: ''
    });

    const handleChange = name => event => {
        event.preventDefault();
        setValues({ ...values, [name]: event.target.value });
        console.log(values)
    };

    return (
        <div className={classes.container}>
            <form noValidate autoComplete="off" onSubmit={e => e.preventDefault() || alert(JSON.stringify(values))}>
                <TextField
                    required
                    id="mylogin"
                    label="Login"
                    className={classes.textField}
                    margin="normal"
                    value={values.name}
                    onChange={handleChange('name')}
                />
                <TextField
                    required
                    id="mypassword"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    onChange={handleChange('password')}
                />
                <div className={classes.btnWrapper}>
                    <Button variant="contained"
                        color="primary"
                        type="submit"
                        label="Login"
                        onSubmit={handleChange('name', 'password')}>
                        Sign In
                </Button>
                    <NavLink to="/signup" className={classes.signUplink}>Sign Up!</NavLink>
                </div>
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
    link: {
        margin: '50px 0 0 6px',
        maxWidth: 40,
    },
    input: {
        display: 'none',
    },
    signUplink: {
        marginLeft: 10,
        textDecoration: 'none',
        color: 'gray'
    },
    btnWrapper: {
        marginTop: 50
    }
}));

export default SignIn;
