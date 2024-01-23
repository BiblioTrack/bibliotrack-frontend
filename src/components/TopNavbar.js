// TopNavbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/AuthPages/AuthContext.js';
import './TopNavbar.css';

function TopNavbar() {
  const { user, isAdmin } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  console.log(user)

  const handleLogout = () => {

    //TODO: Add logout logic here

    logout();

    navigate('/login');

  };



  return (
    <Navbar sticky='top' bg="info" data-bs-theme="dark" className='px-2' data-testid="top-navbar" expand="md">
      <Navbar.Brand >BiblioTrack</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        {/* {user != null && user.userinfo != null && */}
        {
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {user != null && user.userinfo != null && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>}
            {user != null && user.userinfo != null && isAdmin && <Nav.Link as={Link} to="/addbook">Add Book</Nav.Link>}
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        }
        {user != null && user.userinfo != null && (
          <Nav className="ml-auto">
            <NavDropdown align="end" title={user.userinfo.firstname + ' ' + user.userinfo.lastname || 'Profile'} id="basic-nav-dropdown">
              {/* <span>User ID: {user.id}</span> */}
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopNavbar;
