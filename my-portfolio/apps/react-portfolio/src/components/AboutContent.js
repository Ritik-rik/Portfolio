import { Link } from "react-router-dom"
import "./AboutContentStyle.css"
import img1 from "../assets/one.jpg"
import img2 from "../assets/two.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
<h1>Who am I?</h1>
<p>Hello, I'm RITIK MEHTA, a passionate and creative developer based in Canada. I believe that the world of technology is a canvas, and I'm here to paint my vision.<br></br><br></br>

Ever since I was a child, I've been fascinated by the endless possibilities that technology offers. From tinkering with my first computer to building innovative software solutions, my journey in the tech world has been an exhilarating adventure.<br></br><br></br>
I hold a Master's Degree from the University of Windsor, where I honed my skills in Computer Science. During my academic journey, I discovered my love for Programming and have been diving deeper into it ever since.<br></br><br></br>
As a Software Developer, I'm dedicated to to pushing the boundaries of software development. I'm always on the lookout for exciting projects and collaborations that challenge me to innovate and make a positive impact on the world.<br></br><br></br>
Feel free to explore my portfolio to see the projects I've worked on and the skills I've developed along the way. I'm open to new opportunities, collaborations, and making new connections, so don't hesitate to reach out!

Let's embark on this journey of innovation and discovery together. </p>
<Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
       <div className="right">
<div className="img-container">
    <div className="img-stack top">
        <img src={img1} className="img" alt="true"/>

    </div>
    <div className="img-stack bottom">
        <img src={img2} className="img" alt="true"/>

    </div>
</div>

       </div>
    </div>
  )
}

export default AboutContent
