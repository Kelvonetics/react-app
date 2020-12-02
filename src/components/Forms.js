import React, { Component } from 'react'
import {Container, Button, Row, Col, Label, Form } from 'react-bootstrap'

export class Forms extends Component
{
    render()
    {
        return (
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group controlId="Email">
                                <Form.Label> Email </Form.Label>
                                <Form.Control type="email" placeholder="Email"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="Pass">
                                <Form.Label> Email </Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="User">
                                <Form.Label> Email </Form.Label>
                                <Form.Control type="text" placeholder="Phone"/>
                            </Form.Group>
                        </Col>
                            <Button variant="info" type=""submit> Login</Button>
                    </Row>i
                </Form>
            </Container>
            
        )
    }
}

export default Forms
