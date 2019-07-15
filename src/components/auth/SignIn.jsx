import React from 'react'
import './../../styles/style.css'
import { makeStyles } from '@material-ui/core/styles'
import Background from '../images/climber_landing.jpg'
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
    };

    const onSubmit = e => {
        e.preventDefault();
        props.signIn(values)
    }
    if (auth.uid) return <Redirect to="/home" />
    return (
        <div className={classes.background}>
            <div className={window.innerWidth < 992 ? classes.containerCenter : classes.containerRight}>
                <form className={classes.formWrapper} noValidate autoComplete="off" onSubmit={onSubmit}>
                    <h1>CLIMB IT!</h1>
                    <TextField
                        required
                        id="mylogin"
                        label="E-mail"
                        className={classes.textField}
                        margin="normal"
                        value={values.email}
                        onChange={handleChange('email')}
                        variant="outlined"
                        InputLabelProps={{
                            className: classes.floatingLabelFocusStyle
                        }}
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
                        variant="outlined"
                        InputLabelProps={{
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
                            type="submit"
                            label="Login"
                            onSubmit={handleChange('name', 'password')}>
                            Sign In
                </Button>
                    </div>
                    <div className={classes.linkWrapper}>
                        <NavLink to="/signup" className={classes.signUplink}>Sign Up!</NavLink>
                    </div>

                </form>
            </div>
        </div >
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
        padding: '130px 50px',

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
        marginTop: 10,
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
        color: '#626363 !important'
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
        textDecoration: 'none',
        color: '#626363',
        fontSize: 14
    },
    btnWrapper: {
        marginTop: 20
    },
    linkWrapper: {
        paddingTop: 10,
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
