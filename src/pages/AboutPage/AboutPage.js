// About.js
import React from 'react';
import TopNavbar from '../../components/TopNavbar.js';
import { Container } from 'react-bootstrap';
import './components/AboutPage.css'

function AboutPage() {
  return <>
    <TopNavbar />
    <Container fluid className="justify-content-center main-section-container">
      <div className="about-container">
        <h2>About Our Library</h2>
        <p>
          Welcome to our Library Management System! We are dedicated to providing a rich and diverse collection of books to our community. Whether you are a student, faculty member our library is here to serve your literary needs.
        </p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to foster a love for reading, learning, and research. We aim to create an environment that encourages intellectual curiosity and supports the academic pursuits of our users.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Extensive Book Collection: Explore a vast array of books covering various genres and subjects.</li>
          <li>User-Friendly Interface: Our Library Management System provides an intuitive and easy-to-use interface for efficient navigation.</li>
          <li>Borrowing and Return: Conveniently borrow and return books using our streamlined process.</li>
          <li>Search and Filter: Quickly find the books you need with powerful search and filtering options.</li>
          {/* Add more features as needed */}
        </ul>

        <h3>Contact Us</h3>
        <p>
          If you have any questions, suggestions, or concerns, feel free to reach out to our library staff. We value your feedback and are here to assist you.
        </p>
      </div>
    </Container>
  </>;
}

export default AboutPage;



