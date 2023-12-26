import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/AuthPages/AuthContext.js'; 
import './TopNavbar.css'; 



function TopNavbar() {
  const { isAdmin } = useAuth();

  //TODO: change navbar to sticky top
  //TODO remove user and admin options before login

  return (
    <Navbar bg="info" data-bs-theme="dark" className='px-2' data-testid="top-navbar" expand="md">
      <Navbar.Brand >BiblioTrack</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          {isAdmin && <Nav.Link as={Link} to="/addbook">Add Book</Nav.Link>}
          {!isAdmin && <Nav.Link as={Link} to="/history">History</Nav.Link>}
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
