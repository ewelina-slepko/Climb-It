import React from 'react';
import AppBar from '../layouts/AppBar';
import RouteSummary from './RouteSummary';

const RoutesList = ({ projects }) => (
    <>
        <AppBar />
        {projects && projects.map(project => {
            return (
                <RouteSummary key={project.id} project={project} />
            )
        })}
    </>
)



export default RoutesList;
