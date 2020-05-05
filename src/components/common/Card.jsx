import React from 'react';
import { string, array } from 'prop-types';
import './card.css'

Card.propTypes = {
    title: string,
    imagePath: string,
    link: string,
    github: string,
    description: string,
    highlights: array
}

function Card({ title, imagePath, link, github, description, highlights }) {
    return (
        <div className="card-container">
            <div className="card">
                 <a href={link} target="_blank">
                    <div>
                        <img className="project-image" src={imagePath} alt="Project Image" target="_blank" />  
                    </div>
                    <div className="details">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        {highlights.length > 0 && (
                            <ul>
                                {highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                            </ul>
                        )}
                    </div>
                </a>
            </div>
            <div className="source-code">
                <a href={github} target="_blank">
                    <div>
                        <img className="logo" src="../../public/images/GitHub-Mark-64px.png" alt="LinkedIn Logo" />
                    </div>
                    <p>Source Code</p>
                </a>  
            </div>
        </div>
    )
}

export default Card;