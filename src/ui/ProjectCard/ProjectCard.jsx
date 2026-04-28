import React, { useState } from "react";
import Modal from "../Modal/Modal";

function ProjectCard({ project, index }, ref) {
    const [isClicked, setClicked] = useState(false);
    const handlePopup = () => { setClicked(true) }
    return (
        <>
            <div
                key={project.title}
                className="project-card"
                ref={(el) => (ref.current[index] = el)}
                onClick={handlePopup}
            >
                <div className="project-icon">{project.icon}</div>
                <h3 onClick={handlePopup}>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                                   
                    {project.tech.map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                    ))}
                </div>

            </div>
            {isClicked && <Modal key={` ${project.title}-modal`} project={project} setClicked={setClicked}/>}
        </>
    )
}
export default React.forwardRef(ProjectCard)