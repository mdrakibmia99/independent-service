import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
     
    const [ createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [user] = useAuthState(auth);


    const navigate = useNavigate();
    
    if (user) {
        navigate('/home');
    }

    const handleSubmitLoginForm = (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Password Not match!!')
            toast('Password Not match!!');
        }else{
            
            createUserWithEmailAndPassword(email, password);
            toast('Registration Successful')

        }
    };
    console.log(user);
    return (
        <>
         <div className='w-100  vh-100 login-form  d-flex align-items-center justify-content-center'>
            
            <div className='login-box mx-auto '>
         
          <h3 className='text-center display-3 text-white'>Register Page!</h3>
            <Form className='form-container' onSubmit={handleSubmitLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required onChange={event => setEmail(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Confirm Password"  required onChange={event => setConfirmPassword(event.target.value)} />
                </Form.Group>
                {error && <p>{error}</p> }
                <input type="submit" value="Register" />
                <ToastContainer/>
               
            </Form>
            <div className='text-center'>
            <p className='text-white'>Already have a Account? <span role="button">
                <Link to={'/login'} className='text-primary'>LogIn</Link>
            </span></p>
            </div>
            
          
            </div>
        </div>
        </>
    );
};

export default Register;