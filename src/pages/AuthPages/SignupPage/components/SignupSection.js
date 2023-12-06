import React, { useState } from 'react';
import { Form, FormControl, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthSection from '../../components/AuthSection';

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
    <AuthSection title="SIGN UP" description="Welcome to our library management system">
      <Form className="mt-5" onSubmit={handleSubmit} role ='form'>
      
      <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="firstname" >
              <FormControl
                data-testid="firstname"
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="lastname" >
              <FormControl
                data-testid="lastname"
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="email" >
          <FormControl
            data-testid="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password" >
          <FormControl
            data-testid="password"
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="info" className="mb-3 wide-button"> SIGN UP </Button>

        <div className="additional-options mt-3">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-info">
              Login here
            </Link>
          </p>
        </div>

      </Form>


    </AuthSection>
  );
};

export default SignupSection;
