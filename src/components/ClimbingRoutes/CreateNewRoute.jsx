import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AppBar from '../layouts/AppBar';
import { connect } from 'react-redux';
import { createNewRoute } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom'


const grades = [
    {
        value: 'Kurtyka',
        label: 'Kurtyka',
    },
    {
        value: 'YDS',
        label: 'YDS',
    },
    {
        value: 'British',
        label: 'British',
    },
    {
        value: 'French',
        label: 'French',
    },
    {
        value: 'UIAA',
        label: 'UIAA',
    },
    {
        value: 'Saxon',
        label: 'Saxon',
    },
    {
        value: 'Ewbank',
        label: 'Ewbank',
    },
    {
        value: 'Nordic',
        label: 'Nordic',
    },
    {
        value: 'Brazilian',
        label: 'Brazilian',
    },
];
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
        value: 'RP (rot punkt)',
        label: 'RP (rot punkt)',
    },
    {
        value: 'PP ( pink point)',
        label: 'PP ( pink point)',
    },
    {
        value: 'TR ( top rope)',
        label: 'TR ( top rope)',
    },
]

const CreateNewRoute = (props) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        date: '',
        location: '',
        rockName: '',
        routeName: '',
        gradingSystem: '',
        difficulty: '',
        climbingStyle: '',
        description: ''
    });
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const { auth } = props
    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <div>
            <AppBar />
            <form className={classes.root} noValidate autoComplete="off" onSubmit={e => e.preventDefault() || props.createNewRoute(values)}>
                <h1 className={clsx(classes.margin, classes.textField)}>Create New Route</h1>
                <TextField
                    id="date"
                    variant="outlined"
                    className={clsx(classes.margin, classes.dateFieldSelect)}
                    label="Date"
                    value={values.date}
                    onChange={handleChange('date')}
                    type="date"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Location (city)"
                    value={values.location}
                    onChange={handleChange('location')}

                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Rock name"
                    value={values.rockName}
                    onChange={handleChange('rockName')}

                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Route name"
                    value={values.routeName}
                    onChange={handleChange('routeName')}

                />
                <TextField
                    select
                    className={clsx(classes.margin, classes.textFieldSelect)}
                    variant="outlined"
                    label="Climbing style"
                    value={values.climbingStyle}
                    onChange={handleChange('climbingStyle')}

                >
                    {climbingStyles.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    className={clsx(classes.margin, classes.textFieldSelect)}
                    variant="outlined"
                    label="Grading system"
                    value={values.gradingSystem}
                    onChange={handleChange('gradingSystem')}

                >
                    {grades.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textFieldSelect)}
                    variant="outlined"
                    label="Difficulty"
                    value={values.difficulty}
                    onChange={handleChange('difficulty')}

                />
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

                />
                <Button
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
    root: {
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: '500px'
    },
    margin: {
        margin: '30px 20px 30px 20px'
    },
    textField: {
        flexBasis: 450,
    },
    dateFieldSelect: {
        flexBasis: 205,
    },
    textFieldSelect: {
        flexBasis: 125,
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
