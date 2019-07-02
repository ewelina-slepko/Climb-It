import React from 'react'
import AppBar from '../layouts/AppBar';

const ProjectSummary = ({ project }) => (
    <>
        <AppBar />
        <div>
            <h1>{project.date}</h1>
            <h3>{project.location}</h3>
            <h4>{project.rockName}</h4>
        </div>
    </>
)

export default ProjectSummary;
