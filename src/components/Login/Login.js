import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;
        console.log(email,password)
    }
    const navigateRegister =event=>{
        navigate('/Registration')
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passRef} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                    <p>new to here ? <Link className='text-danger text-decoration-none' to={'/Registration'} onClick={navigateRegister} >please Register </Link> </p>
                </div>
            </div>
        </>
    );
};

export default Login;