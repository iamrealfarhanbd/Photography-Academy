import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const DetailsCourse = () => {
    const { courseId } = useParams();
    return (
        <section class="p-5 bg-dark text-light" id="learn ">
        <Container className='text-center '>
            <Row>
                <h2>DetailsCourse Id :{courseId} </h2>
                <Link to={'/order'}>DetailsCourse </Link>
            </Row>
        </Container>
        </section>
    );
};   

export default DetailsCourse;