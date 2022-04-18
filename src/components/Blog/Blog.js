import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <Container>
                <h2 className='text-center p-3'> My Blog Section</h2>
                <Row>
                    <Col xs={12} md={6} className="mt-5">
                        <Card>
                            <Card.Header as="h5">What is a semantic tag?</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {
                                        `There are a bunch of Semantic tags in HTML5. They are header, footer, article, main, nav, and many others.  Header tag indicates header of the page. Inside a header we can add nav (<nav>) which is also a Semantic tag. Footer (<footer>) indicates the footer of the page. The <article> element specifies independent, self-contained content.`
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} className="mt-5">
                        <Card>
                            <Card.Header as="h5">What is context API?</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {
                                        `React Hooks provides a concept called context. React context API allows you to easily access data at different levels of the component tree, without passing prop to every level. This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on. With the help of context API, data can be sent easily to any child components from any parent components.`
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Blog;