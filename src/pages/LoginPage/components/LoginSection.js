// LoginSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link for routing
import './LoginSection.css';

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    };

  return (
    <Container fluid className="login-section-container">
      <Row className="justify-content-center text-center">
        <Col md={8} lg={6} xl={4}>
          <div className="login-div">
            <h4>LOGIN</h4>
            <p>Welcome to our library management system</p>
            <Form  className="mt-5"  onSubmit={handleSubmit}>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button type="submit" variant="info" className="loginButton mb-3">
                LOGIN
              </Button>

              <div className="mt-3">
                <p>
                  <Link className="text-secondary"> Forgot password? </Link>
                </p>
                <p>
                  Don't have an account? &nbsp; <Link  to="/signup" className='text-info'>Signup here</Link>
                </p>
              </div>

            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSection;
