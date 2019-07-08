import React from 'react';
import MaterialTable from 'material-table';
import { fontStyle } from '@material-ui/system';


const RoutesList = ({ projects }) => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Date', field: 'date' },
            // { title: 'Location', field: 'location' },
            // { title: 'Rock name', field: 'rockName' },
            { title: 'Route name', field: 'routeName' },
            // { title: 'Climbing style', field: 'climbingStyle' },
            // { title: 'Grading system', field: 'gradingSystem' },
            { title: 'Difficulty', field: 'difficulty' },
            // { title: 'Description', field: 'description' },
        ],
        data: projects.map(project => {
            return {
                date: <p>{project.date}</p>,
                // location: <h2>{project.location}</h2>,
                // rockName: <p>{project.rockName}</p>,
                routeName: <p>{project.routeName}</p>,
                // climbingStyle: <p>{project.climbingStyle}</p>,
                // gradingSystem: <p>{project.gradingSystem}</p>,
                difficulty: <p>{project.difficulty}</p>,
                // description: <p>{project.description}</p>
            }
        }),
    });
    return (
        <>
            <MaterialTable
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

            />
        </>
    )
}


export default RoutesList;
