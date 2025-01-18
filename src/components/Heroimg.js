import "./HeroImgStyle.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import GitHubContributions from "./GithubContributions";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa"; // Import icons

import GitHubCalendar from "github-calendar";

const Heroimg = () => {
  useEffect(() => {
    // Initialize GitHub Calendar
    GitHubCalendar(".github-calendar", "ritikrikm", {
      responsive: true,
    });
    
  }, []);

  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="content">
        <p>Hi, I'M A SOFTWARE DEVELOPER.</p>
        <h1>RITIK MEHTA.</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>

        {/* Social Media Links */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/-ritikmehta-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/ritikrikm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Ritik_Mehta_Resume.pdf"
          >
            <FaFileDownload size={30} />
          </a>
        </div>

        <GitHubContributions />
      </div>
    </div>
  );
};

export default Heroimg;
