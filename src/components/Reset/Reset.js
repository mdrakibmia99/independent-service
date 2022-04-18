import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


const Reset = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    
 const handleReset= async (event)=>{
     event.preventDefault();

   if(email){
    await sendPasswordResetEmail(email);
    toast("Please check your Email!!")
   }
 }
    return (
        <div className='w-100  vh-100 login-form  d-flex align-items-center  justify-content-center'>
            
        <div className='login-box mx-auto '>
     
      <h2 className='text-center display-1 text-white'>Reset Page!</h2>
        <Form className='form-container' onSubmit={handleReset}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" required onChange={event => setEmail(event.target.value)} />
            </Form.Group>

            <input type="submit" value="Reset" />
            <ToastContainer />
           
        </Form>
        <div className='text-center'>
        
        <p className='text-white'>Already have a Account? <span role="button">
            <Link to={'/login'} className='text-primary'>LogIn</Link>
        </span></p>
        </div>
      
        </div>
    </div>
    );
};

export default Reset;