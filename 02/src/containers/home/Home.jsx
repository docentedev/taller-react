import React from 'react';
import { Jumbotron ,Container, Row, Col,
    Card, CardHeader,
    CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

import Menu from '../../components/menu/Menu';

const posts = [
    { id: 1, parentId: 2},
    { id: 2, parentId: 134},
    { id: 3, parentId: 56},
    { id: 4, parentId: 345},
    { id: 5, parentId: 26},
];

const Home = () => {
    return (
        <div className="home">
            <Menu className="mb-4" />
            <Container>
                <Row>
                    <Col>
                        <Jumbotron>
                            <h1>Hola</h1>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    {posts.map((post) => {
                        return (
                            <Col md="4" lg="3">
                                <Card className="mt-4">
                                    <CardHeader>Post {post.id}</CardHeader>
                                    <CardBody>
                                        Mi body
                                    </CardBody>
                                    <CardFooter className="text-right">
                                        <Link className="btn btn-info" to={`/post/detail/${post.id}/${post.parentId}`}>
                                            ver detalle
                                        </Link>
                                    </CardFooter>
                                </Card>
                                
                            </Col>  
                        );
                    })}
                </Row>
            </Container>
            

            <Link to="/login">Login</Link><br/>
            
        </div>
    );
};

export default Home;