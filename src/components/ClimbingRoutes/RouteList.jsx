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
                    <RouteSummary key={project.id} project={project} />
                )
            })}
        </>
    )
}



export default RoutesList;
