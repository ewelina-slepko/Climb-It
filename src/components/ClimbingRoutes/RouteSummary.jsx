import React from 'react'
import MaterialTable from 'material-table';


const ProjectSummary = ({ project }) => {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Date', field: 'date' },
            { title: 'Location', field: 'location' },
            { title: 'Rock name', field: 'rockName' },
            { title: 'Route name', field: 'routeName' },
            { title: 'Climbing style', field: 'climbingStyle' },
            { title: 'Grading system', field: 'gradingSystem' },
            { title: 'Difficulty', field: 'difficulty' },
            { title: 'Description', field: 'description' },
        ],
        data: [
            {
                // date: <p> {project.date}</p>,
                // location: <h2>{project.location}</h2>,
                // rockName: <h1>{project.rockName}</h1>,
                // routeName: <p>{project.routeName}</p>,
                // climbingStyle: <p>{project.climbingStyle}</p>,
                // gradingSystem: <p>{project.gradingSystem}</p>,
                // difficulty: <p>{project.difficulty}</p>,
                // description: <p>{project.description}</p>
            },
        ],
    });
    return (
        <>
            {/* <Container maxWidth="sm">
                <div>
                    <p> Date: {project.date}</p>
                    <h2> {project.location}</h2>
                    <h1> {project.rockName}</h1>
                    <p> Route Name: {project.routeName}</p>
                    <p> Climbing style: {project.climbingStyle}</p>
                    <p> Grading system: {project.gradingSystem}</p>
                    <p> Difficulty: {project.difficulty}</p>
                    <p> Description: {project.description}</p>
                </div>
                <br />
            </Container> */}

            <MaterialTable
                key={project.id}
                project={project}
                title="List of Routes"
                columns={state.columns}
                data={state.data}
                editable={{
                    onRowAdd: newData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.push(newData);
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data[data.indexOf(oldData)] = newData;
                                setState({ ...state, data });
                            }, 600);
                        }),
                    onRowDelete: oldData =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                const data = [...state.data];
                                data.splice(data.indexOf(oldData), 1);
                                setState({ ...state, data });
                            }, 600);
                        }),
                }}
            />
        </>
    )
}


export default ProjectSummary;
