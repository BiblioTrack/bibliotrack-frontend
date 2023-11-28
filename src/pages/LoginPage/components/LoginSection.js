import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import VerticalSpace from '../../../components/VerticalSpace';
import './LoginSection.css';


const LoginSection = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return (
        <Container fluid className="login-section-container">
            <Row className="justify-content-center text-center ">
                <div className='login-div'>
                    <h1>Login</h1>
                    <p>Welcome to our library management system</p>
                    <form className='login-form' onSubmit={handleSubmit} >

                        <label htmlFor='email' style={{ textAlign: "left" }}>Email</label>
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='your email'
                            id='email'
                            name='email'
                            className='email-input'
                        />
                        <label htmlFor='password' style={{ textAlign: "left" }}>Password</label>
                        <input value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            type='password'
                            placeholder='******'
                            id='password'
                            name='password'
                            className='password-input'
                        />

                        <button type='submit' className='loginButton'>Log in</button>

                    </form>
                </div>
                {/* </Col> */}
            </Row >
        </Container >
    );
};

export default LoginSection; // Make sure to include this line
