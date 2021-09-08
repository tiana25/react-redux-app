import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint atque est sed rem a? Dicta repellat voluptatem, perferendis maxime temporibus ad rerum? Perspiciatis neque, numquam quam deleniti illo odit rerum!</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Tania Sky</div>
                    <div>8th September, 11am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
