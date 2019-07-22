import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

const RoutesList = (props) => {
    const { auth, myProjects } = props
    const classes = useStyles();

    const [state] = React.useState({
        columns: [
            { title: 'Date', field: 'date' },
            { title: 'Location', field: 'location' },
            { title: 'Rock Name', field: 'rockName' },
            { title: 'Route name', field: 'routeName' },
            { title: 'Difficulty', field: 'difficulty' },
        ],

        columnsResponsive: [
            { title: 'Date', field: 'date' },
            { title: 'Route name', field: 'routeName' },
            { title: 'Difficulty', field: 'difficulty' },
        ],
        data: myProjects.map(project => {
            return {
                date: <span>{project.date}</span>,
                location: <span>{project.location}</span>,
                rockName: <span>{project.rockName}</span>,
                routeName: <span>{project.routeName}</span>,
                climbingStyle: <span>{project.climbingStyle}</span>,
                gradingSystem: <span>{project.gradingSystem}</span>,
                difficulty: <span className={classes.infoGreen} > {project.difficulty}</span >,
                description: <span>{project.description}</span>
            }
        }),
    });

    if (!auth.uid) return <Redirect to="/signin" />
    return (
        <>
            <h1 className={classes.header}>List of routes</h1>
            <MaterialTable
                onCellClick={() => { alert("Table Row Clicked!! ") }}
                component={Link} to="/home"
                title=""
                columns={window.innerWidth < 992 ? state.columnsResponsive : state.columns}
                data={state.data}
                options={{ pageSizeOptions: [10, 20, 30], pageSize: 10 }}
                editable={{
                    // onRowUpdate: (newData, oldData) =>
                    //     new Promise(resolve => {
                    //         setTimeout(() => {
                    //             resolve();
                    //             const data = [...state.data];
                    //             data[data.indexOf(oldData)] = newData;
                    //             setState({ ...state, data });
                    //         }, 600);
                    //     }),
                    // onRowDelete: oldData =>
                    //     new Promise(resolve => {
                    //         setTimeout(() => {
                    //             resolve();
                    //             const data = [...state.data];
                    //             data.splice(data.indexOf(oldData), 1);
                    //             setState({ ...state, data });
                    //         }, 600);
                    //     }),

                }}

                detailPanel={rowData => {
                    return (
                        <>
                            <div className={classes.details}
                            >
                                <ul>
                                    <li className={classes.detailsList} >Date: <p className={classes.detailsListValue}>{rowData.date}</p></li>
                                    <li className={classes.detailsList}>Location: <p className={classes.detailsListValue}>{rowData.location}</p></li>
                                    <li className={classes.detailsList}>Rock name: <p className={classes.detailsListValue}>{rowData.rockName}</p></li>
                                    <li className={classes.detailsList}>Route name: <p className={classes.detailsListValue}>{rowData.routeName}</p></li>
                                </ul>

                                <ul>
                                    <li className={classes.detailsList}>Climbing style: <p className={classes.detailsListValue}>{rowData.climbingStyle}</p></li>
                                    <li className={classes.detailsList}>Grading system: <p className={classes.detailsListValue}>{rowData.gradingSystem}</p></li>
                                    <li className={classes.detailsList}>Difficulty: <p className={classes.detailsListValue}>{rowData.difficulty}</p></li>
                                </ul>
                                <ul>
                                    <li className={classes.detailsList}>Description: <p className={classes.detailsListValue}>{rowData.description}</p></li>
                                </ul>
                            </div>

                        </>
                    )
                }}
                onRowClick={(event, rowData, togglePanel) => togglePanel()}
            />
        </>
    )
}

const useStyles = makeStyles(theme => ({
    infoGreen: {
        color: '#48ca4a',
        fontWeight: 'bold'
    },
    header: {
        fontSize: 26,
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center',
        color: '#404040',
        paddingBottom: 20
    },
    details: {
        fontSize: 16,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'row',
        alignItem: 'center',
        justifyContent: 'center',
        margin: 40,
    },
    detailsList: {
        listStyleType: 'none',
        padding: '2px 20px',
        color: '#575757',
        fontSize: 14
    },
    detailsListValue: {
        fontWeight: 'bold',
        fontSize: 16,
        paddingBottom: 3
    }

}))

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
)(RoutesList);

