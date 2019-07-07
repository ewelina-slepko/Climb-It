import React from 'react'
import AppBar from '../layouts/AppBar';

const ProjectSummary = ({ project }) => (
    <>
        <AppBar />

        <ul id={project.rockName}>
            <li>{project.date}</li>
            <li>{project.location}</li>
            <li>{project.rockName}</li>
            <li>{project.routeName}</li>
            <li>{project.gradingSystem}</li>
            <li>{project.difficulty}</li>
            <li>{project.climbingStyle}</li>
            <li>{project.description}</li>
        </ul>
    </>
)

export default ProjectSummary;
