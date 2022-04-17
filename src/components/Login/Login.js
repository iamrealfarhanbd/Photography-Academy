import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = event =>{
        event.preventDefault();
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
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
                </div>
            </div>
        </>
    );
};

export default Login;