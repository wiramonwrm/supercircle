import React from "react";
import { AiOutlineGitlab } from "react-icons/ai";
import { GiBearFace } from "react-icons/gi";
import { RiEmojiStickerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import "./ProjectSection.css";

function ProjectSection() {
  return (
    <div className="projects-page">
      <Link to="/project1">
        <div className="projects-container">
          <GiBearFace className="project-icon" />
          <p className="project-des">Project: NLP</p>
        </div>
      </Link>
      <Link to="/project2">
        <div className="projects-container">
          <RiEmojiStickerLine className="project-icon" />
          <p className="project-des">Sentiment Analysis</p>
        </div>
      </Link>
      <Link to="/No-project">
        <div className="projects-container">
          <AiOutlineGitlab className="project-icon" />
          <p className="project-des">Underconstruction</p>
        </div>
      </Link>
      <Link to="/No-project">
        <div className="projects-container">
          <AiOutlineGitlab className="project-icon" />
          <p className="project-des">Underconstruction</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectSection;
