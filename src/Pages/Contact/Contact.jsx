import React from 'react'
import Navbar from '../Components/Navbar'
import './Contact.css'

function Contact() {
  return (
    <div>
        <header>
        <h1>Contact Us</h1>
        <Navbar/>
    </header>
    <div className="container">
        <div className="content">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us using the contact information below:</p>
            <ul>
                <li><strong>Email:</strong> contact@mywebsite.com</li>
                <li><strong>Phone:</strong> (123) 456-7890</li>
                <li><strong>Address:</strong> 1234 Main St, City, Country</li>
            </ul>
        </div>
    </div>
    <footer>
        &copy; 2023 My Homepage
    </footer>
    </div>
  )
}

export default Contact
