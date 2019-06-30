import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SignUp = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        emailConfirmed: '',
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
                    id="standard-name"
                    label="Login"
                    className={classes.textField}
                    margin="normal"
                    value={values.name}
                    onChange={handleChange('name')}
                />
                <TextField
                    required
                    id="standard-name"
                    label="E-mail"
                    className={classes.textField}
                    margin="normal"
                    value={values.email}
                    onChange={handleChange('email')}
                />
                <TextField
                    required
                    id="standard-name"
                    label="Potwierdź adres e-mail"
                    className={classes.textField}
                    margin="normal"
                    value={values.emailConfirmed}
                    onChange={handleChange('emailConfirmed')}
                />
                <TextField
                    required
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    value={values.password}
                    onChange={handleChange('password')}
                />
                <Button variant="contained" color="primary" className={classes.button} type="submit" label="Login" onSubmit={handleChange('name', 'password')}>
                    Sign Up
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

export default SignUp;
