import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/AuthPages/AuthContext.js'; 
import './TopNavbar.css'; 



function TopNavbar() {
  const { isAdmin } = useAuth();

  return (
    <Navbar className="navbar navbar-dark bg-info" data-testid="top-navbar" expand="md">
      <Navbar.Brand >BiblioTrack</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
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
