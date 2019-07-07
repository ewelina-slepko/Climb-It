import React from 'react';
import AppBar from '../layouts/AppBar';
import RouteSummary from './RouteSummary';

const RoutesList = ({ projects }) => {

    return (
        <>
            <AppBar />
            {projects && projects.map(project => {
                console.log(project.id);
                return (
                    <div key={project.id} project={project}>
                        <h1> {project.rockName}</h1>
                        <h2> {project.location}</h2>
                        <p> Difficulty: {project.difficulty}</p>
                    </div>
                    // <RouteSummary key={project.id} project={project} />
                )
            })}
        </>
    )
}



export default RoutesList;
