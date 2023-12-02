import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import VerticalSpace from '../../../components/VerticalSpace';
import './SignupSection.css';


const SignupSection = () => {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [userID, setUserid] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstname)
        console.log(lastname)
        console.log(userID)
        console.log(email)
        console.log(pass)
    }
    return (
        <Container fluid className="signup-section-container">
            <Row className="justify-content-center text-center ">
                <div className='signup-div'>
                    <h1>Signup</h1>
                    {/* <p>Welcome to our library management system</p> */}
                    <form className='signup-form' onSubmit={handleSubmit} >

                        <label htmlFor='firstname' style={{ textAlign: "left" }}>First Name</label>
                        <input value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            type='text'
                            placeholder='Enter your first name'
                            id='firstname'
                            name='firstname'
                            className='email-input'
                        />
                        <label htmlFor='lastname' style={{ textAlign: "left" }}>Last Name</label>
                        <input value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            type='text'
                            placeholder='Enter your last name'
                            id='lastname'
                            name='lastname'
                            className='email-input'
                        />
                        <label htmlFor='userid' style={{ textAlign: "left" }}>User ID</label>
                        <input value={userID}
                            onChange={(e) => setUserid(e.target.value)}
                            type='userid'
                            placeholder='Enter your userid'
                            id='userid'
                            name='userid'
                            className='email-input'
                        />

                        <label htmlFor='email' style={{ textAlign: "left" }}>Email</label>
                        <input value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            placeholder='Enter your email'
                            id='email'
                            name='email'
                            className='email-input'
                        />
                        <label htmlFor='password' style={{ textAlign: "left" }}>Password</label>
                        <input value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            type='password'
                            placeholder='*************'
                            id='password'
                            name='password'
                            className='password-input'
                        />

                        <button type='submit' className='signupButton'>Sign up</button>

                    </form>
                </div>
                {/* </Col> */}
            </Row >
        </Container >
    );
};

export default SignupSection; // Make sure to include this line
