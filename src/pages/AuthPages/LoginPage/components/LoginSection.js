import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { Link , useNavigate } from 'react-router-dom';
import MainSection from '../../../../components/MainSection.js'
import { useAuth } from '../../AuthContext.js';



const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();


  //TODO: form submit error check

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock user data
    const mockUserData = {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      role: 'admin', // or 'admin' based on user role
    };    


    login(mockUserData);

    navigate('/');


    // Add login logic here
    /*
     try {
      const response = await axios.post('/api/login', { email, password });
      const userData = response.data; // Assuming your backend sends user data upon successful login
      
      // Now, you can handle the user data, such as storing it in your authentication context
      // For example, using the useAuth hook from the previous example
      login(userData);
      // Redirect to the home page, for example
      history.push('/');
      // Redirect or perform any other actions needed after successful login
    } catch (error) {
      // Handle login error
      console.error('Login failed', error);
    }
    */
  };

  return (
    <MainSection title="LOGIN" description="Welcome to our library management system">
      <Form className="mt-5" onSubmit={handleSubmit} role ='form'>
      <Form.Group className="mb-3" controlId="email" >
          <FormControl
            data-testid="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
