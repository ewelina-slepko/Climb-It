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
                    <h1>CLIMB IT!</h1>
                    <TextField
                        required
                        id="email"
                        label="E-mail"
                        className={classes.textField}
                        margin="normal"
                        value={values.email}
                        onChange={handleChange('email')}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.floatingLabelFocusStyle
                        }}
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
                        InputLabelProps={{
                            shrink: true,
                            className: classes.floatingLabelFocusStyle
                        }}
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
                        InputLabelProps={{
                            shrink: true,
                            className: classes.floatingLabelFocusStyle
                        }}
                    />
                    <div className={classes.errorMessage}>{authError ? <p>{authError}</p> : null}</div>
                    <div className={classes.btnWrapper}>
                        <Button
                            style={{
                                backgroundColor: "#39a83b",
                                padding: '10px',
                                borderRadius: 30,
                            }}
                            fullWidth={true}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            type="submit"
                            label="Login"
                            onSubmit={handleChange('name', 'password')}>
                            Sign Up
                </Button >
                    </div>
                    <div className={classes.linkWrapper}>
                        <NavLink to="/signin" className={classes.signInlink}>Login to your account</NavLink>
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
        backgroundColor: 'rgb(255, 255, 255, .9)',
        padding: '50px 20px',
        borderRadius: 5,
        textAlign: 'center'
    },
    textField: {
        width: 250,
        '& fieldset': {
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#48ca4a !important',
        },
    },
    floatingLabelFocusStyle: {
        paddingLeft: 20,
        textAlign: 'center',
        color: '#626363 !important'
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
        marginTop: 20
    },
    linkWrapper: {
        paddingTop: 10,
    },
    signInlink: {
        textDecoration: 'none',
        color: '#626363',
        fontSize: 14
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
