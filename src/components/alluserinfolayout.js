import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pbutton from './buttons';
import Card from 'react-bootstrap/Card';
import Avatar from './avatar';
import UserName from './username'
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import WebsiteLink from './userwebsitelink';
import UserTitle from './usertitle';

function PrimaryCardLayout({user}){
    const columnStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '3rem'
    }
  
    return (
        <Container>
            <Row style={columnStyles}>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body style={{textAlign: 'center'}}>
                            <Avatar name={user.name} />
                            <UserTitle name = {user.name} />
                            <UserName username={user.username} />
                            <WebsiteLink website={user.website} /> 
                            <br />
                            <Link to={String(user.id)}>
                                <Pbutton />
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  }

export default PrimaryCardLayout;