import React from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';


const RoutesList = ({ projects }) => {
    const [state, setState] = React.useState({
        columns: [
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
                difficulty: <span>{project.difficulty}</span>,
                description: <span>{project.description}</span>
            }
        }),
    });
    return (
        <>
            <MaterialTable
                onCellClick={() => { alert("Table Row Clicked!! ") }}
                component={Link} to="/home"
                title="List of Routes"
                columns={state.columns}
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
                detailPanel={[
                    {
                        icon: 'chevron_right',
                        tooltip: 'Show Details',
                        render: rowData => {
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
                        },
                    },
                ]}
            />
        </>
    )
}

const styles = {
    listStyleType: 'none',
    padding: 3,
    color: '#575757'
}

export default RoutesList;
