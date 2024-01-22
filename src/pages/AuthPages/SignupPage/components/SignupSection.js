import React, { useState } from 'react';
import { Form, FormControl, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainSection from '../../../../components/MainSection.js'
import { API_BASE_URL } from '../../../../ApiCalls.js'

const SignupSection = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('student');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const validateSignUpForm = () => {
    // Validate name (firstname and lastname)
    if (!firstname.trim() || !lastname.trim()) {
      alert('Please enter both first name and last name.');
      return false;
    }

    // Validate password strength
    if (password.length < 8) {
      alert('Password should be at least 8 characters long.');
      return false;
    }

    // Validate matching passwords
    if (password !== repeatPassword) {
      alert('Passwords do not match.');
      return false;
    }

    // TODO: Add more advanced password strength validation if needed

    return true;
  };

  const handleSignUp = async () => {

    const userData = {
      firstname,
      lastname,
      email,
      username,
      password,
      role,
      admin: role === 'admin' ? true : false,
    };
    console.log(
      userData
    )

    try {
      // Validate form data before making the API call
      if (!validateSignUpForm()) {
        return;
      }

      const response = await fetch(`${API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      // TODO: Handle successful signup (e.g., show a success message, redirect the user)
      console.log('Signup successful');
    } catch (error) {
      console.error('Error during signup:', error);
      // TODO: Handle signup error (e.g., show an error message to the user)
      alert('Signup failed. Please try again.');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    //Add signup form validation before submit 
    if (!validateSignUpForm()) {
      return;
    }
    //TODO: Add signup logic here
    handleSignUp();
  };

  return (
    <MainSection title="SIGN UP" description="Welcome to our library management system">
      <Form className="mt-5" onSubmit={handleSubmit} role='form'>

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
        <Form.Group className="mb-3" controlId="username" >
          <FormControl
            data-testid="username"
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="role" >
          <Form.Label>User Role</Form.Label>
          <Form.Select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>

            {/* Add more role options as needed */}
          </Form.Select>
          {/* <FormControl
            data-testid="role"
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
        </Form.Group>

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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="repeatPassword" >
          <FormControl
            data-testid="repeatPassword"
            type="password"
            placeholder="Repeat Password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
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


    </MainSection>
  );
};

export default SignupSection;
