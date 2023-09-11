import "./HeroImgStyle.css";
import React from 'react'
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
   

      </div>
      <div className="content">
<p> Hi, I'M A SOFTWARE DEVELOPER.</p>
<h1>RITIK MEHTA.</h1>
<Link to="/project" className="btn">Projects</Link>
<Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  )
}

export default Heroimg
