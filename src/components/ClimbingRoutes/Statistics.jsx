import React from 'react'
import Highcharts from 'highcharts'
import { HighchartsChart, Chart, PieSeries, withHighcharts, XAxis, YAxis, Title, ColumnSeries } from 'react-jsx-highcharts'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const plotOptions = {
    column: {
        colorByPoint: true,
        'colors': ['#486B00', '#F7CB15', '#068D9D', '#841584', '#82204A', '#B76F18', '#D7263D', '#050517']
    },
    pie: {
        colorByPoint: true,
        'colors': ['#DEDEDE', '#9A9997', '#B3B3B3', '#636261']
    }
}


const Statistics = (props) => {
    const { myProjects } = props;
    const classes = useStyles();

    const difficulties = myProjects.map(project => (
        project.difficulty
    ));

    const climbingStyles = myProjects.map(project => (
        project.climbingStyle
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


    const OS = climbingStyles.filter(route => (
        route === 'OS (on sight)'
    ));
    const Flash = climbingStyles.filter(route => (
        route === 'Flash'
    ));
    const RP = climbingStyles.filter(route => (
        route === 'RP (rot punkt)'
    ));
    const TR = climbingStyles.filter(route => (
        route === 'TR ( top rope)'
    ));

    const pieData = [
        {
            name: 'Flash',
            y: Flash.length > 0 ? Flash.length : null
        },
        {
            name: 'RP',
            y: RP.length > 0 ? RP.length : null
        },

        {
            name: 'OS',
            y: OS.length > 0 ? OS.length : null
        },
        {
            name: 'TR',
            y: TR.length > 0 ? TR.length : null
        }];

    return (
        <div className={window.innerWidth < 692 ? classes.containerMobile : classes.container}>
            <h1 className={classes.header}>My Statistics</h1>
            <div className={window.innerWidth < 692 ? classes.chartContainerMobile : classes.chartContainer}>

                <HighchartsChart
                    highcharts={Highcharts}
                    plotOptions={plotOptions}
                >
                    <PieSeries
                        name="Total consumption"
                        size={window.innerWidth < 692 ? 30 : 70}
                        categories={['IV', 'V', 'VI']}
                        data={pieData}
                        showInLegend={true}
                        center={[180, 20]}
                    />
                    <Chart />

                    <XAxis categories={['IV', 'V', 'VI', 'VI.1', 'VI.2', 'VI.3', 'VI.4', 'VI.5']} />
                    <YAxis allowDecimals={false}>
                        <ColumnSeries
                            name='number of routes'
                            data={[IV.length, V.length, VI.length, VI1.length, VI2.length, VI3.length, VI4.length, VI5.length]}
                        />
                    </YAxis>

                </HighchartsChart>
            </div>


            <div className={classes.chartContainer}>
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    containerMobile: {
        margin: '0px 20px 0px 20px',
        textAlign: 'center',
    },
    container: {
        margin: '0px 200px 0px 200px',
        textAlign: 'center',
        fontSize: 26
    },
    header: {
        fontSize: 26,
        textTransform: 'uppercase',
        paddingTop: 10,
        color: '#404040',
    },
    chartContainer: {
        padding: '80px 0px',
        textAlign: 'right',
    },
    chartContainerMobile: {
        padding: '30px 0px',
        textAlign: 'right',
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
)(withHighcharts(Statistics, Highcharts));
