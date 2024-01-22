import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import MainSection from '../../../../components/MainSection.js'
import { useAuth } from '../../AuthContext.js';
import { API_BASE_URL } from '../../../../ApiCalls.js'

const LoginSection = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const userLoginRequest = async (username, password) => {
    try {

      const userCred = {
        username,
        password
      };
      console.log(JSON.stringify(userCred))
      // Make API call to authenticate user
      const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCred),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      // Assuming the API returns user data upon successful login
      const userData = await response.json();



      // Call the login function with the user data
      login(userData);

      // Navigate to the home page or any other route upon successful login
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      console.log(process.env.REACT_APP_API_ENDPOINT)
      // Handle authentication error, e.g., display an error message to the user
      alert('Invalid username or password');
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    //Add login form validation before submit 
    if (!username || !password) {
      alert('Please enter both username and password.');
      return false;
    }

    //TODO: Add login logic here

    userLoginRequest(username, password);


    // // Mock user data
    // const mockUserData = {
    //   id: 1,
    //   firstname: 'John',
    //   lastname: 'Doe',
    //   email: 'john@example.com',
    //   role: 'user',
    // };


    // login(mockUserData);

    // navigate('/');


  };

  return (
    <MainSection title="LOGIN" description="Welcome to our library management system">
      <Form className="mt-5" onSubmit={handleSubmit} role='form'>
        <Form.Group className="mb-3" controlId="username" >
          <FormControl
            data-testid="username"
            type="username"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <FormControl
            data-testid="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" variant="info" className="mb-3 wide-button"> LOGIN</Button>

        <div className="mt-3">
          <p>
            <Link className="text-secondary">
              Forgot password?
            </Link>
          </p>
          <p>
            Don't have an account?{' '}
            <Link to="/signup" className="text-info">
              Signup here
            </Link>
          </p>
        </div>

      </Form>

    </MainSection>
  );
};

export default LoginSection;
