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
        <div className="card">
            <a href={link} target="_blank" className="project-image-container">
                <img className="project-image" src={imagePath} alt="Project Image" target="_blank" />  
            </a>
            <a href={link} target="_blank" className="description details-section">
                <div className="description__main">
                    <h4>{title}</h4>
                    <p>{description}</p> 
                </div>
                <div className="arrow">></div>
            </a>
            <a href={github} target="_blank" className="source-code details-section">
                <div className="source-code__main">
                    <div className="source-code__logo-container">
                        <img className="logo" src="../../public/images/GitHub-Mark-64px.png" alt="LinkedIn Logo" />
                    </div>
                    {highlights.length > 0 && (
                        <ul className="highlights">
                            {highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
                        </ul>
                    )}
                </div>
                <div className="arrow">></div>
            </a>
        </div>
    )
}

export default Card;