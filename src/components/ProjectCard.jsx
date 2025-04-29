import React from "react";
import {FaGithub, FaCode, FaPuzzlePiece, FaUserTie, FaLightbulb
}
from "react-icons/fa";

import "../components/ProjectCard.css";



function ProjectCard({icon, name, screenshot,github, tech, description, whatItDoes, learned, role, challenges, onClick }){
    return (
        <div className="card" onClick={onClick}>
            <div className="icon-hero">{icon}</div>
            <img src={screenshot} alt={`${name} screenshot`} className="card-image"/>
            <div className="card-content">
                <h2>{name}</h2>
                <p>{description}</p>
                    <p><FaCode className="icon"/> <strong className="label">Tech:</strong> {tech}</p>
                    <p><FaLightbulb className="icon"/> <strong className="label">What it does:</strong> {whatItDoes}</p>
                    <p><FaPuzzlePiece className="icon"/> <strong className="label">What I learned:</strong> {learned}</p>
                    <p><FaUserTie className="icon"/> <strong className="label">Role:</strong> {role}</p>
                    <p><FaPuzzlePiece className="icon"/><strong className="label">Challenges:</strong> {challenges}</p>
                    <a href={github} target="_blank" rel="noopener noreferrer" className="github-link" onClick={(e) => e.stopPropagation ()}>
                    <FaGithub /> View on Github
                </a>
            </div>
        </div>
    );
}



export default ProjectCard;