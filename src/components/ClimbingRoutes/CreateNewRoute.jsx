import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import AppBar from '../layouts/AppBar'
import { connect } from 'react-redux'
import { createNewRoute } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'


const climbingType = [
    {
        value: 'Sport climbing',
        label: 'Sport climbing',
    },
    {
        value: 'Bouldering',
        label: 'Bouldering',
    },
];

const boulderingStyles = [
    {
        value: 'OS (on sight)',
        label: 'OS (on sight)',
    },
    {
        value: 'RP (red point)',
        label: 'RP (red point)',
    },
]

const climbingStyles = [
    {
        value: 'OS (on sight)',
        label: 'OS (on sight)',
    },
    {
        value: 'Flash',
        label: 'Flash',
    },
    {
        value: 'RP (red point)',
        label: 'RP (red point)',
    },
    {
        value: 'TR ( top rope)',
        label: 'TR ( top rope)',
    },
]

const sportClimbingDifficulty = [
    {
        value: 'IV',
        label: 'IV',
    },
    {
        value: 'V-',
        label: 'V-',
    },
    {
        value: 'V',
        label: 'V',
    },
    {
        value: 'V+',
        label: 'V+',
    },
    {
        value: 'VI-',
        label: 'VI-',
    },
    {
        value: 'VI',
        label: 'VI',
    },
    {
        value: 'VI+',
        label: 'VI+',
    },
    {
        value: 'VI.1',
        label: 'VI.1',
    },
    {
        value: 'VI.1+',
        label: 'VI.1+',
    },
    {
        value: 'VI.2',
        label: 'VI.2',
    },
    {
        value: 'VI.2+',
        label: 'VI.2+',
    },
    {
        value: 'VI.3',
        label: 'VI.3',
    },
    {
        value: 'VI.3+',
        label: 'VI.3+',
    },
    {
        value: 'VI.4',
        label: 'VI.4',
    },
    {
        value: 'VI.4+',
        label: 'VI.4+',
    },
    {
        value: 'VI.5',
        label: 'VI.5',
    },
    {
        value: 'VI.5+',
        label: 'VI.5+',
    },
    {
        value: 'VI.6',
        label: 'VI.6',
    },
    {
        value: 'VI.6+',
        label: 'VI.6+',
    },
    {
        value: 'VI.7',
        label: 'VI.7',
    },
    {
        value: 'VI.7+',
        label: 'VI.7+',
    },
    {
        value: 'VI.8',
        label: 'VI.8',
    },
]

const boulderingDifficulty = [
    {
        value: '4',
        label: '4',
    },
    {
        value: '4+',
        label: '4+',
    },
    {
        value: '5',
        label: '5',
    },
    {
        value: '5+',
        label: '5+',
    },
    {
        value: '6a',
        label: '6a',
    },
    {
        value: '6a+',
        label: '6a+',
    },
    {
        value: '6b',
        label: '6b',
    },
    {
        value: '6b+',
        label: '6b+',
    },
    {
        value: '6c',
        label: '6c',
    },
    {
        value: '6c+',
        label: '6c+',
    },
    {
        value: '7a',
        label: '7a',
    },
    {
        value: '7a+',
        label: '7a+',
    },
    {
        value: '7b',
        label: '7b',
    },
    {
        value: '7b+',
        label: '7b+',
    },
    {
        value: '7c',
        label: '7c',
    },
    {
        value: '7c+',
        label: '7c+',
    },
    {
        value: '8a',
        label: '8a',
    },
    {
        value: '8a+',
        label: '8a+',
    },
    {
        value: '8b',
        label: '8b',
    },
    {
        value: '8b+',
        label: '8b+',
    },
    {
        value: '8c',
        label: '8c',
    },
    {
        value: '8c+',
        label: '8c+',
    },
    {
        value: '9a',
        label: '9a',
    },
]

const CreateNewRoute = (props) => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        date: '',
        location: '',
        rockName: '',
        routeName: '',
        climbingType: '',
        difficulty: '',
        climbingStyle: '',
        boulderingStyle: '',
        description: ''
    });
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const onSubmit = e => {
        e.preventDefault()
        props.createNewRoute(values)
        props.history.push('/newroutesuccess')
    }
    const { auth } = props
    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <div className={classes.container}>
            <AppBar />
            <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
                <h1 className={classes.header}>Add New Route</h1>
                <TextField
                    id="date"
                    className={clsx(classes.margin, classes.dateFieldSelect)}
                    label="Date"
                    value={values.date}
                    onChange={handleChange('date')}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                        className: classes.floatingLabelFocusStyle
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    label="Location (city)"
                    value={values.location}
                    onChange={handleChange('location')}
                    variant="outlined"
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    label="Rock name"
                    value={values.rockName}
                    onChange={handleChange('rockName')}
                    variant="outlined"
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    label="Route name"
                    value={values.routeName}
                    onChange={handleChange('routeName')}
                    variant="outlined"
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle
                    }}
                />
                <TextField
                    select
                    className={clsx(classes.marginSelect, classes.textFieldSelect)}
                    label="Type of climbing"
                    value={values.climbingType}
                    onChange={handleChange('climbingType')}
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                        className: classes.floatingLabelFocusStyle
                    }}
                >
                    {climbingType.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>

                {values.climbingType === 'Sport climbing'
                    ?
                    <TextField
                        select
                        className={clsx(classes.marginSelect, classes.textFieldSelect)}
                        label="Difficulty"
                        value={values.difficulty}
                        onChange={handleChange('difficulty')}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.floatingLabelFocusStyle
                        }}
                    >
                        {sportClimbingDifficulty.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    :
                    null
                }

                {values.climbingType === 'Bouldering'
                    ?
                    <TextField
                        select
                        className={clsx(classes.marginSelect, classes.textFieldSelect)}
                        label="Difficulty"
                        value={values.difficulty}
                        onChange={handleChange('difficulty')}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.floatingLabelFocusStyle
                        }}
                    >
                        {boulderingDifficulty.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    :
                    null}

                {values.climbingType === 'Sport climbing'
                    ?
                    <TextField
                        select
                        className={clsx(classes.marginSelect, classes.textFieldSelect)}
                        label="Climbing style"
                        value={values.climbingStyle}
                        onChange={handleChange('climbingStyle')}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.floatingLabelFocusStyle
                        }}
                    >
                        {climbingStyles.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    :
                    null
                }

                {values.climbingType === 'Bouldering'
                    ?
                    <TextField
                        select
                        className={clsx(classes.marginSelect, classes.textFieldSelect)}
                        label="Climbing style"
                        value={values.boulderingStyle}
                        onChange={handleChange('boulderingStyle')}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                            className: classes.floatingLabelFocusStyle
                        }}
                    >
                        {boulderingStyles.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    :
                    null
                }


                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    value={values.description}
                    onChange={handleChange('description')}
                    multiline
                    rows="5"
                    className={clsx(classes.margin, classes.textField)}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        className: classes.floatingLabelFocusStyle
                    }}
                />
                <Button
                    style={{
                        backgroundColor: "#39a83b",
                    }}
                    variant="contained"
                    color="primary"
                    className={classes.btnPosition}
                    type="submit"
                    label="Login"
                    onSubmit={handleChange('name', 'password')}
                >
                    Add Route
                </Button>
            </form>
        </div>
    )
}


const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
        height: '100%',
        color: '#404040',

    },
    root: {
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '500px',
    },
    header: {
        fontSize: 26,
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        color: '#404040',
        paddingBottom: 20
    },
    margin: {
        margin: '15px 30px'
    },
    textField: {
        flexBasis: 450,
        '& fieldset': {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#999797 !important',
        },
    },
    dateFieldSelect: {
        flexBasis: 205,
        '& fieldset': {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#999797 !important',
        },
    },
    textFieldSelect: {
        flexBasis: 125,
        '& fieldset': {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#999797 !important',
        },
    },
    marginSelect: {
        margin: '15px 5px 15px 30px'
    },
    floatingLabelFocusStyle: {
        paddingLeft: 5,
        textAlign: 'center',
        color: '#626363 !important'
    },
    btnPosition: {
        margin: '30px 20px 30px auto'
    }
}));

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewRoute: (project) => dispatch(createNewRoute(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewRoute);
