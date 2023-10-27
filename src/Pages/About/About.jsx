import React from 'react'
import './About.css'


function About() {
  return (
    <div>
       <header>
        <h1>About Us</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    </header>
    <div className="container">
        <div className="content">
            <h2>Our Story</h2>
            <p>We are a passionate team of web developers dedicated to creating amazing online experiences. Our mission is to make the web a better place through beautiful and functional websites.</p>
        </div>
    </div>
    <footer>
        &copy; 2023 My Homepage
    </footer>
    </div>
  )
}

export default About
