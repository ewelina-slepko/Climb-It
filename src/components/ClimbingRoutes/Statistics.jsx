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
        'colors': ['#D0DBCB', '#A1B897', '#638852', '#4D723C', '#3E5B30', '#2E4524', '#1F2E18', '#080C06']
    },
    pie: {
        colorByPoint: true,
        'colors': ['#FBD4A4', '#F9BF77', '#F7A94A', '#864C04']
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

    //mapProjectsToData return tablica z ilością trudności


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

    const boulderingStyles = myProjects.map(project => (
        project.boulderingStyle
    ));
    const OSBoulder = boulderingStyles.filter(route => (
        route === 'OS (on sight)'
    ));
    const RPBoulder = boulderingStyles.filter(route => (
        route === 'RP (rot punkt)'
    ));

    const dif4 = difficulties.filter(dif => (
        dif === '4'
    ));
    const difPlus4 = difficulties.filter(dif => (
        dif === '4+'
    ));
    const dif5 = difficulties.filter(dif => (
        dif === '5'
    ));
    const difPlus5 = difficulties.filter(dif => (
        dif === '5+'
    ));
    const dif6a = difficulties.filter(dif => (
        dif === '6a'
    ));
    const difPlus6a = difficulties.filter(dif => (
        dif === '6a+'
    ));
    const dif6b = difficulties.filter(dif => (
        dif === '6b'
    ));
    const difPlus6b = difficulties.filter(dif => (
        dif === '6b+'
    ));
    const dif6c = difficulties.filter(dif => (
        dif === '6c'
    ));
    const difPlus6c = difficulties.filter(dif => (
        dif === '6c+'
    ));
    const dif7a = difficulties.filter(dif => (
        dif === '7a'
    ));
    const difPlus7a = difficulties.filter(dif => (
        dif === '7a+'
    ));
    const dif7b = difficulties.filter(dif => (
        dif === '7b'
    ));
    const difPlus7b = difficulties.filter(dif => (
        dif === '7b+'
    ));
    const dif7c = difficulties.filter(dif => (
        dif === '7c'
    ));
    const difPlus7c = difficulties.filter(dif => (
        dif === '7c+'
    ));
    const dif8a = difficulties.filter(dif => (
        dif === '8a'
    ));
    const difPlus8a = difficulties.filter(dif => (
        dif === '8a+'
    ));
    const dif8b = difficulties.filter(dif => (
        dif === '8b'
    ));
    const difPlus8b = difficulties.filter(dif => (
        dif === '8b+'
    ));
    const dif8c = difficulties.filter(dif => (
        dif === '8c'
    ));
    const difPlus8c = difficulties.filter(dif => (
        dif === '8c+'
    ));
    const dif9a = difficulties.filter(dif => (
        dif === '9a'
    ));


    const pieDataSport = [
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

    const pieDataBouldering = [
        {
            name: 'RP',
            y: RPBoulder.length > 0 ? RP.length : null
        },

        {
            name: 'OS',
            y: OSBoulder.length > 0 ? OS.length : null
        },
    ]

    return (
        <div className={window.innerWidth < 692 ? classes.containerMobile : classes.container}>
            <h1 className={classes.header}>My Statistics</h1>
            <div className={window.innerWidth < 692 ? classes.chartContainerMobile : classes.chartContainer}>



                <div className={classes.sectionOne}>

                    <HighchartsChart
                        highcharts={Highcharts}
                        plotOptions={plotOptions}
                    >
                        <Title>Sport climbing achievements</Title>

                        <Chart />
                        <XAxis categories={['IV', 'V', 'VI', 'VI.1', 'VI.2', 'VI.3', 'VI.4', 'VI.5']} />
                        <YAxis allowDecimals={false}>
                            <ColumnSeries
                                name='number of routes'
                                data={[IV.length, V.length, VI.length, VI1.length, VI2.length, VI3.length, VI4.length, VI5.length]}
                            />
                        </YAxis>
                    </HighchartsChart>

                    <div className={classes.chartContainer}>
                        <HighchartsChart
                            highcharts={Highcharts}
                            plotOptions={plotOptions}
                        >
                            <Title>Climbing style</Title>
                            <PieSeries
                                name="Total consumption"
                                size={window.innerWidth < 692 ? 120 : 260}
                                data={pieDataSport}
                                showInLegend={true}
                            />
                        </HighchartsChart>

                    </div>

                </div>

                <div className={classes.sectionTwo}>

                    <HighchartsChart
                        highcharts={Highcharts}
                        plotOptions={plotOptions}
                    >
                        <Title>Bouldering achievements</Title>

                        <Chart />
                        <XAxis categories={['4', '4+', '5', '5+',
                            '6a', '6a+', '6b', '6b+', '6c', '6c+',
                            '7a', '7a+', '7b', '7b+', '7c', '7c+',
                            '8a', '8a+', '8b', '8b+', '8c', '8c+', '9a']} />
                        <YAxis allowDecimals={false}>
                            <ColumnSeries
                                name='number of routes'
                                data={[dif4.length, difPlus4.length, dif5.length, difPlus5.length, dif6a.length,
                                difPlus6a.length, dif6b.length, difPlus6b.length, dif6c.length, difPlus6c.length,
                                dif7a.length, difPlus7a.length, dif7b.length, difPlus7b.length, dif7c.length,
                                difPlus7c.length, dif8a.length, difPlus8a.length, dif8b.length, difPlus8b.length,
                                dif8c.length, difPlus8c.length, dif9a.length]}
                            />
                        </YAxis>

                    </HighchartsChart>

                    <div className={classes.chartContainer}>
                        <HighchartsChart
                            highcharts={Highcharts}
                            plotOptions={plotOptions}
                        >
                            <Title>Climbing style</Title>
                            <PieSeries
                                name="Total consumption"
                                size={window.innerWidth < 692 ? 120 : 260}
                                data={pieDataBouldering}
                                showInLegend={true}
                            />
                        </HighchartsChart>
                    </div>
                </div>
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
    sectionOne: {
        border: 'solid 1px #ededed',
        paddingTop: 50
    },
    sectionTwo: {
        border: 'solid 1px #ededed',
        paddingTop: 50,
        marginTop: 50
    },
    chartContainer: {
        marginTop: 36
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
