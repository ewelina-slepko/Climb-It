import React from 'react';
import AppBar from '../layouts/AppBar';
import RouteSummary from './RouteSummary';

const RoutesList = ({ projects }) => (
    <>
        <AppBar />
        {projects && projects.map(project => {
            return (
                <RouteSummary project={project} key={project.id} />
            )
        })}
    </>
)



export default RoutesList;
