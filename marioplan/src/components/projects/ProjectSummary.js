import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="class-title">{project.title}</span>
                    <p>Posted by Tania</p>
                    <p className="grey-text">8th September, 10am</p>
                </div>   
            </div>
    )
}

export default ProjectSummary