import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [user,loading, error] = useAuthState(auth);
 
   
    const navigate = useNavigate();
   
    
    if (user) {
        navigate('/home');
    }

    const handleSubmitLoginForm = async (event) => {
        event.preventDefault();


       await signInWithEmailAndPassword(email, password);

        console.log(user);
    };
    return (
        <>
         <div className='w-100  vh-100 login-form  d-flex align-items-center '>
            
            <div className='login-box mx-auto '>
         
          <h2 className='text-center display-1 text-white'>Login Page!</h2>
            <Form className='form-container' onSubmit={handleSubmitLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                {error && <p className='text-danger'>{error}</p> }
                <input type="submit" value="Login" />
               
            </Form>
            <div className='text-center'>
            <p className='mt-3 mb-0 text-white'>Forgot password? <span role="button">
                <Link to={'/reset'} className='text-danger'>reset this</Link>
            </span></p>
            <p className='text-white'>Don't have an account? <span role="button">
                <Link to={'/register'} className='text-primary'>create one</Link>
            </span></p>
            </div>
          
            </div>
        </div>
        </>
    );
};

export default Login;