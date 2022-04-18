import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const CourseCard = (props) => {
    const navigate = useNavigate();
    const { Name, discription, image,id } = props.review;

    return (
        <>
            <Col lg={4} md={6}>
                <Card className='m-2' >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{Name}</Card.Title>
                        <Card.Text>
                            {discription}
                        </Card.Text>
                        <span className='d-flex justify-content-between  flex-column '>
                        <Button variant="outline-warning mb-1" onClick={() => navigate('/order')}>Order Now</Button>
                        <Button variant="outline-dark mt-1" onClick={() => navigate(`/AllCourse/${id}`)}>Read More</Button>
                        </span>
                  
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CourseCard;
