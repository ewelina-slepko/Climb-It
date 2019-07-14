import React from 'react'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../images/climber_landing.jpg'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
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
        <div className={classes.background}>
            <div className={window.innerWidth < 992 ? classes.containerCenter : classes.containerRight}>
                <form className={classes.formWrapper} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <TextField
                        required
                        id="email"
                        label="E-mail"
                        className={classes.textField}
                        margin="normal"
                        value={values.email}
                        onChange={handleChange('email')}
                        variant="outlined"
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
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="login"
                        label="Login"
                        className={classes.textField}
                        margin="normal"
                        value={values.login}
                        onChange={handleChange('login')}
                        variant="outlined"
                    />
                    <div className={classes.errorMessage}>{authError ? <p>{authError}</p> : null}</div>
                    <div className={classes.btnWrapper}>
                        <Button variant="contained" color="primary" className={classes.button} type="submit" label="Login" onSubmit={handleChange('name', 'password')}>
                            Sign Up
                </Button >
                        <NavLink to="/signin" className={classes.signInlink}>Sign In!</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    background: {
        height: '100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: '-150px'
    },
    containerCenter: {
        margin: '0 auto',
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,

    },
    containerRight: {
        display: 'flex',
        width: 300,
        flexDirection: 'column',
        paddingTop: 100,
        margin: '0px 300px 0px auto'
    },
    formWrapper: {
        backgroundColor: 'rgb(255, 255, 255, .8)',
        padding: '50px 20px',
        borderRadius: 5
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 250,
        '& fieldset': {
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#48ca4a !important',
        },
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
    input: {
        display: 'none',
    },
    errorMessage: {
        color: 'red'
    },
    btnWrapper: {
        marginTop: 50
    },
    signInlink: {
        marginLeft: 10,
        textDecoration: 'none',
        color: 'gray',
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
