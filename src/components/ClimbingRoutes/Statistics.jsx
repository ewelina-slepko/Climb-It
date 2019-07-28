import React from 'react'
import Highcharts from 'highcharts'
import { HighchartsChart, Chart, PieSeries, withHighcharts, XAxis, YAxis, Title, ColumnSeries } from 'react-jsx-highcharts'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const plotOptions = {
    column: {
        colorByPoint: true,
        'colors': ['#87B068', '#87B068', '#87B068', '#D0BF5F', '#D0BF5F', '#D0BF5F', '#823B6E',
            '#823B6E', '#823B6E', '#CA3330', '#CA3330', '#CA3330', '#08415C', '#08415C', '#08415C',
            '#666A86', '#666A86', '#666A86', '#000000', '#000000', '#000000',
        ]
    },
    pie: {
        colorByPoint: true,
        'colors': ['#FBD4A4', '#F9BF77', '#F7A94A', '#864C04']
    }
}

const Statistics = (props) => {
    const { myProjects } = props;
    const classes = useStyles();

    const climbingStyles = myProjects.map(project => (
        project.climbingStyle
    ));

    const boulderingTypes = myProjects.filter(project => project.climbingType === 'Bouldering')
    const sportClimbingTypes = myProjects.filter(project => project.climbingType === 'Sport climbing')

    function mapProjectsToData(types) {
        const difficulties = types.map(project => project.difficulty)
        const categories = [...new Set(difficulties)].sort();
        const data = categories.map(grade =>
            difficulties.filter(difficulty => difficulty === grade).length
        )
        return { categories, data }
    }
    const boulderingData = mapProjectsToData(boulderingTypes)
    const sportClimbingData = mapProjectsToData(sportClimbingTypes)

    const OS = climbingStyles.filter(route => (
        route === 'OS (on sight)'
    ));
    const Flash = climbingStyles.filter(route => (
        route === 'Flash'
    ));
    const RP = climbingStyles.filter(route => (
        route === 'RP (red point)'
    ));
    const TR = climbingStyles.filter(route => (
        route === 'TR (top rope)'
    ));

    const boulderingStyles = myProjects.map(project => (
        project.boulderingStyle
    ));
    const OSBoulder = boulderingStyles.filter(route => (
        route === 'OS (on sight)'
    ));
    const RPBoulder = boulderingStyles.filter(route => (
        route === 'RP (red point)'
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
            y: RPBoulder.length > 0 ? RPBoulder.length : null
        },

        {
            name: 'OS',
            y: OSBoulder.length > 0 ? OSBoulder.length : null
        },
    ]

    return (
        <div className={window.innerWidth < 692 ? classes.containerMobile : classes.container}>
            <h1 className={classes.header}>My Statistics</h1>
            <div className={window.innerWidth < 692 ? classes.chartContainerMobile : classes.chartContainer}>

                {sportClimbingData.categories.length > 0
                    ? (<div className={classes.sectionOne}>
                        <HighchartsChart
                            highcharts={Highcharts}
                            plotOptions={plotOptions}
                        >
                            <Title>Sport climbing achievements</Title>

                            <Chart />
                            <XAxis categories={sportClimbingData.categories} />
                            <YAxis allowDecimals={false}>
                                <ColumnSeries
                                    name='number of routes'
                                    data={sportClimbingData.data}
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
                        </div>)
                </div>)
                    : null}

                {boulderingData.categories.length > 0
                    ? (<div className={classes.sectionTwo}>
                        <HighchartsChart
                            highcharts={Highcharts}
                            plotOptions={plotOptions}
                        >
                            <Title>Bouldering achievements</Title>

                            <Chart />
                            <XAxis categories={boulderingData.categories} />
                            <YAxis allowDecimals={false}>
                                <ColumnSeries
                                    name='number of routes'
                                    data={boulderingData.data}
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
                    </div>)
                    : null}
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
        paddingTop: 20,
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
