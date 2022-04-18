import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [signInWithEmailAndPassword, user,error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, Googleuser, Googleloading, Googleerror] = useSignInWithGoogle(auth);
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorEvent;

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = () => {
        navigate('/Registration')
    }
    const navigateresetPass = () => {
        navigate('/RestPass')
    }
    if (user || Googleuser) {
        navigate(from, { replace: true });
    }
    
    if (error) {
        console.log(error.message)
        errorEvent = <p className='text-danger'>Error:{error?.message} </p>
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Form className=' m-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                    <p>{errorEvent}</p>
                    <p>New to here ? <Link className='text-danger text-decoration-none' to={'/RestPass'} onClick={navigateresetPass} >Forget password? </Link> </p>
                    <p>New to here ? <Link className='text-danger text-decoration-none' to={'/Registration'} onClick={navigateRegister} >please Register </Link> </p>
                    <div className='border-right'> OR </div>
                    <div className='social-Login mt-2 mb-5'>
                        <div id="gSignInWrapper" onClick={() => signInWithGoogle()}>
                            <span className="label">Sign in with: </span>
                            <div id="customBtn" className="customGPlusSignIn">
                                <span className="icon"></span>
                                <span className="buttonText"> Google</span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    );
};

export default Login;