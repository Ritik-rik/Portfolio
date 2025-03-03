import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeSelector.css'; // import your CSS
import recImage from '../assets/rec.png';  // relative path to rec.png
import devImage from '../assets/dev.png';  // relative path to dev.png
const HomeSelector = () => {
  const navigate = useNavigate();

  return (
    <div className="home-selector-container">
      <h1>Who’s there?</h1>
      <div className="profile-cards">
        {/* Recruiter Profile */}
        <div className="profile-card" onClick={() => navigate('/home1')}>
        <img src={recImage} alt="Recruiter" className="profile-image" />
          <p>Recruiter</p>
        </div>

        {/* Developer Profile */}
        <div className="profile-card" onClick={() => navigate('/home')}>
        <img src={devImage} alt="Developer" className="profile-image" />
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
};

export default HomeSelector;
