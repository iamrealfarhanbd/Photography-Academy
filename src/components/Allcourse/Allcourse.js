import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CourseCard from './CourseCard/CourseCard';

const Allcourse = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(reviewData => setReviews(reviewData))
    }, [])

    return (
        <>
            <Container className='mx-auto my-5'>
                <Row >
                    {reviews.map(review => <CourseCard key={review.id} review={review} />)}
                </Row>
            </Container>
        </>
    );
};

export default Allcourse;