import React from 'react'

function Card({ title, imagePath, link, github, description }) {
    return (
        <div>
            <a href={link} target="_blank" className="card">
                <div>
                    <img className="logo" src={imagePath} alt="Project Image" target="_blank" />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </a>
            <a href={github} target="_blank">
                <img className="logo" src="../../public/images/GitHub-Mark-64px.png" alt="LinkedIn Logo" />
                <p>Source Code</p>
            </a>
        </div>
    )
}

export default Card;