import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

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
        Date: '',
        Location: '',
        RockName: '',
        RouteName: '',
        GradingSystem: '',
        Difficulty: '',
        Description: ''
    });
    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={e => e.preventDefault() || alert(JSON.stringify(values))}>
                <h1 className={clsx(classes.margin, classes.textField)}>Create New Route</h1>
                <TextField
                    id="date"
                    className={clsx(classes.margin, classes.textFieldSelect)}
                    label="Date"
                    value={values.Date}
                    onChange={handleChange('Date')}
                    type="date"
                    defaultValue="rrrr-mm-dd"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Location (city)"
                    value={values.Location}
                    onChange={handleChange('Location')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Rock name"
                    value={values.RockName}
                    onChange={handleChange('RockName')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-simple-start-adornment"
                    className={clsx(classes.margin, classes.textField)}
                    variant="outlined"
                    label="Route name"
                    value={values.RouteName}
                    onChange={handleChange('RouteName')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    select
                    className={clsx(classes.margin, classes.textFieldSelect)}
                    variant="outlined"
                    label="Grading system"
                    value={values.GradingSystem}
                    onChange={handleChange('GradingSystem')}
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
                    className={clsx(classes.margin, classes.textFieldSelect)}
                    variant="outlined"
                    label="Difficulty"
                    value={values.Difficulty}
                    onChange={handleChange('Difficulty')}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    value={values.Description}
                    onChange={handleChange('Description')}
                    multiline
                    rows="5"
                    className={clsx(classes.margin, classes.textField)}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.margin}
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
    textFieldSelect: {
        flexBasis: 205,
    },
}));

export default CreateNewRoute;
