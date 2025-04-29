import react from "react";
import { FaGithub, FaCode, FaPuzzlePiece, FaUserTie, FaLightbulb } from "react-icons/fa";
import "./Popup.css";

const Popup = ({ project,onClose }) => {
    if (!project) return null;

const { screenshot } = project;

return (
    <div className="popup-overlay" onClick={onClose}>
        <div className="popup-container" onClick={e => e.stopPropagation()}>
            <button className="popup-close" onClick={onClose}>X</button>
         
            <img src={screenshot} alt= "Project Screenshot" className="popup-screenshot" />
        </div>
    </div>
    );
};

export default Popup;



