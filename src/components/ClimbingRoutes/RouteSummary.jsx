import React from 'react'
import Container from '@material-ui/core/Container';

const ProjectSummary = ({ project }) => (
    <>
        <Container maxWidth="sm">
            <div>
                <h1> {project.rockName}</h1>
                <h2> {project.location}</h2>
                <p> Date: {project.date}</p>
                <p> Route Name: {project.routeName}</p>
                <p> Climbing style: {project.climbingStyle}</p>
                <p> Grading system: {project.gradingSystem}</p>
                <p> Difficulty: {project.difficulty}</p>
                <p> Description: {project.description}</p>
            </div>
            <br />
        </Container>
    </>
)


export default ProjectSummary;
