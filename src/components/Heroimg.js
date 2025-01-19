import "./HeroImgStyle.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GitHubContributions from "./GithubContributions";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import GitHubCalendar from "github-calendar";
import { useMemo } from "react";

const Heroimg = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0); // Keeps track of character index in the current phrase
  const [typingSpeed, setTypingSpeed] = useState(150); // Dynamic typing speed

  const phrases = useMemo(() => ["Developer", "Coder", "Learner"], []);

  useEffect(() => {
    // Initialize GitHub Calendar
    GitHubCalendar(".github-calendar", "ritikrikm", {
      responsive: true,
    });

    const handleTyping = () => {
      const currentPhrase = phrases[loopIndex];

      if (!isDeleting) {
        // Typing characters
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // If the entire word is typed, pause before deleting
        if (charIndex + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause after typing the full word
          setTypingSpeed(150); // Reset speed for deletion
        }
      } else {
        // Deleting characters
        setDisplayText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // If the entire word is deleted, move to the next word
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => (prev + 1) % phrases.length); // Move to the next phrase
          setTypingSpeed(150); // Reset speed for typing
        }
      }
    };

    // Typing effect interval
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer); // Cleanup timeout
  }, [charIndex, isDeleting, loopIndex, typingSpeed, phrases]);

  return (
    <div className="hero">
      <div className="mask"></div>
      <div className="content">
        <p>
          I am a <span className="typing-text">{displayText}</span>
        </p>
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
