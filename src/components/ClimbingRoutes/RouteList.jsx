import React from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom'

const RoutesList = (props) => {
    const { auth, projects } = props
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

        data: projects.map(project => {
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
            <MaterialTable
                onCellClick={() => { alert("Table Row Clicked!! ") }}
                component={Link} to="/home"
                title="LIST OF ROUTES"
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
                        <div
                            style={{
                                fontSize: 16,
                                backgroundColor: '#fff',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItem: 'center',
                                justifyContent: 'center',
                                margin: 40
                            }}
                        >
                            <ul
                            >
                                <li style={styles} >Date: {rowData.date}</li>
                                <li style={styles}>Location: {rowData.location}</li>
                                <li style={styles}>Rock name: {rowData.rockName}</li>
                                <li style={styles}>Route name: {rowData.routeName}</li>
                                <li style={styles}>Climbing style: {rowData.climbingStyle}</li>
                                <li style={styles}>Grading system: {rowData.gradingSystem}</li>
                                <li style={styles}>Difficulty: {rowData.difficulty}</li>
                                <li style={styles}>Description: {rowData.description}</li>
                            </ul>
                        </div>
                    )
                }}
                onRowClick={(event, rowData, togglePanel) => togglePanel()}
            />
        </>
    )
}

const styles = {
    listStyleType: 'none',
    padding: 3,
    color: '#575757'
}

const useStyles = makeStyles(theme => ({
    infoGreen: {
        color: '#48ca4a',
        fontWeight: 'bold'
    },
}))

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(RoutesList);

