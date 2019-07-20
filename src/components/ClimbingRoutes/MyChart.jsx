import React from 'react'
import Highcharts from 'highcharts'
import { HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Legend, ColumnSeries } from 'react-jsx-highcharts'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const plotOptions = {
    column: {
        colorByPoint: true
    }
}

const MyChart = (props) => {
    const { myProjects } = props;
    const classes = useStyles();

    const difficulties = myProjects.map(project => (
        project.difficulty
    ));

    const IV = difficulties.filter(IV => (
        IV === 'IV'
    ));

    const V = difficulties.filter(V => (
        V === 'V'
    ));

    const VI = difficulties.filter(VI => (
        VI === 'VI'
    ));

    const VI1 = difficulties.filter(VI1 => (
        VI1 === 'VI.1'
    ));

    const VI2 = difficulties.filter(VI2 => (
        VI2 === 'VI.2'
    ));

    const VI3 = difficulties.filter(VI3 => (
        VI3 === 'VI.3'
    ));

    const VI4 = difficulties.filter(VI4 => (
        VI4 === 'VI.4'
    ));

    const VI5 = difficulties.filter(VI5 => (
        VI5 === 'VI.5'
    ));

    console.log(V)
    return (
        <div className={classes.container}>
            <HighchartsChart
                highcharts={Highcharts}
                plotOptions={plotOptions}
            >
                <Chart />

                <Title>Climbing achievements</Title>

                <Legend />

                <XAxis categories={['IV', 'V', 'VI', 'VI.1', 'VI.2', 'VI.3', 'VI.4', 'VI.5']} />

                <YAxis allowDecimals={false}>
                    <ColumnSeries
                        name='number of routes'
                        data={[IV.length, V.length, VI.length, VI1.length, VI2.length, VI3.length, VI4.length, VI5.length]}

                    />
                </YAxis>
            </HighchartsChart>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    container: {
        margin: '60px 10px 60px 10px',
    },
}));

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        myProjects: state.firestore.ordered.myProjects,
        auth: state.firebase.auth,
        userId: state.firebase.auth.uid,
    }
}

export default compose(
    firestoreConnect(props => [
        {
            collection: 'projects',
        }
    ]), connect(mapStateToProps)
)(withHighcharts(MyChart, Highcharts));
