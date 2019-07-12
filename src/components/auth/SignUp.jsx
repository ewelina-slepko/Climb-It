import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signUp } from '../../store/actions/authActions'

const SignUp = (props) => {
    const { auth, authError } = props
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: '',
        login: '',
    });

    const handleChange = name => event => {
        event.preventDefault();
        setValues({ ...values, [name]: event.target.value });
        console.log(values)
    };
    const onSubmit = e => {
        e.preventDefault();
        props.signUp(values)
    }
    if (auth.uid) return <Redirect to="/home" />
    return (
        <div className={classes.container}>
            <form className={classes.formWrapper} noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField
                    required
                    id="email"
                    label="E-mail"
                    className={classes.textField}
                    margin="normal"
                    value={values.email}
                    onChange={handleChange('email')}
                />
                <TextField
                    required
                    id="password"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    value={values.password}
                    onChange={handleChange('password')}
                />
                <TextField
                    required
                    id="login"
                    label="Login"
                    className={classes.textField}
                    margin="normal"
                    value={values.login}
                    onChange={handleChange('login')}
                />
                <div className={classes.errorMessage}>{authError ? <p>{authError}</p> : null}</div>
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
    errorMessage: {
        color: 'red'
    },
    formWrapper: {
        backgroundColor: 'rgb(255, 255, 255, .9)',
        padding: '50px 20px',
        borderRadius: 5
    },
}));

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
