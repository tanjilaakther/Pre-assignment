import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import WebsiteLink from './userwebsitelink';
import { Container, Row, Col } from 'react-bootstrap';

const SpecificUserinfo = ({user}) => {
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
                        <Card.Body style={{textAlign: 'left'}}>
                            <Card.Text> name = {user.name} </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
  }

export default SpecificUserinfo;