import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

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

const CreateNewRoute = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={e => e.preventDefault() || alert(JSON.stringify(values))}>
                <h1 className={clsx(classes.margin, classes.textField)}>Create New Route</h1>
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Location (city)"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Rock name"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Route name"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    select
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Grading system"
                    value={values.weightRange}
                    onChange={handleChange('weightRange')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                >
                    {grades.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Difficulty"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows="5"
                    className={clsx(classes.margin, classes.textField)}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
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
        margin: '20px'
    },
    textField: {
        flexBasis: 450,
    },
}));

export default CreateNewRoute;
