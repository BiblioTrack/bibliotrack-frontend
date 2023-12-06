import React from 'react';
import { Navbar } from 'react-bootstrap';

function TopNavbar() {
  return (
    <Navbar className="navbar navbar-dark bg-info" data-testid="top-navbar">
      <Navbar.Brand href="#home">BiblioTrack</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Your navigation links go here */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
