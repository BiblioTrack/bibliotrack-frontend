// SignupSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing
import './SignupSection.css';

const SignupSection = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <Container fluid className="signup-section-container">
      <Row className="justify-content-center text-center">
        <Col md={8} lg={6} xl={4}>
          <div className="signup-div">
            <h4>SIGN UP</h4>
            <p>Welcome to our library management system</p>

            <Form className="mt-5 signup-form" onSubmit={handleSubmit}>
              
            <Row>
                {/* First Name */}
                <Col md={6} className="mb-3">
                <Form.Group controlId="firstname">
                    <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    />
                </Form.Group>
                </Col>

                {/* Last Name */}
                <Col md={6} className="mb-3">
                <Form.Group controlId="lastname">
                    <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    />
                </Form.Group>
                </Col>
            </Row>

              <Form.Group className="mb-3" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" variant="info" className="signupButton mb-3">
                SIGN UP
              </Button>

              <div className="additional-options mt-3">
                <p> Already have an account? &nbsp; 
                  <Link to="/login" className="text-info">
                    Login here
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupSection;
