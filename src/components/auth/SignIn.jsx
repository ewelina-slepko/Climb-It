import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

const SignIn = (props) => {
    const { authError, auth } = props
    const classes = useStyles();
    const [values, setValues] = React.useState({
        email: '',
        password: ''
    });

    const handleChange = name => event => {
        event.preventDefault();
        setValues({ ...values, [name]: event.target.value });
        console.log(values)
    };

    const onSubmit = e => {
        e.preventDefault();
        props.signIn(values)
    }
    if (auth.uid) return <Redirect to="/home" />
    return (
        <div className={classes.container}>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <TextField
                    required
                    id="mylogin"
                    label="Login"
                    className={classes.textField}
                    margin="normal"
                    value={values.name}
                    onChange={handleChange('email')}
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
                <div className={classes.errorMessage}>{authError ? <p>{authError}</p> : null}</div>
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
    },
    errorMessage: {
        color: 'red'
    }
}));

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
