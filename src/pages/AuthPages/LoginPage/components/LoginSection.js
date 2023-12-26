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
  //TODO: https://stackoverflow.com/questions/39097440/on-react-router-how-to-stay-logged-in-state-even-page-refresh

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock user data
    const mockUserData = {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      email: 'john@example.com',
      role: 'admin', 
    };    


    login(mockUserData);

    navigate('/');


    // Add login logic here
    /*
     try {
      const response = await axios.post('/api/login', { email, password });
      const userData = response.data; 
      
      login(userData);
      navigate('/');

    } catch (error) {
      // Handle login error
      //TODO: Login fail message
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
