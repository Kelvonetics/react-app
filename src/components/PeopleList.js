import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link, withRouter } from 'react-router-dom';
import {Container, Button, Row, Col, Label, Form } from 'react-bootstrap'

class PeopleList extends Component
{

    renderPeople = () => {
        if (this.props.people !== undefined)
        {
            return this.props.people.map(person => {
                return (
                    
                        <Container>
                            <Row>
                                <Col md-2 pull-left>
                                    <Link to={`${person.name}`} key={person.id} className="">
                                        <img className="" src={`Albums/${person.name}/${person.profile_pic}.jpeg`} alt="" />
                                        <div>
                                            <h1 className="info"> {person.name} </h1>
                                            {
                                                person.online_status === "on" && <img src="Albums/live.svg" alt="live" className="live" />
                                            }
                                        </div>
                                        <button variant="success">Test</button>                                                        
                                    </Link>
                                </Col>
                            </Row> 
                        </Container>   
                )
            })
        }
    }

    render() {
        return (
            <div style={{color:'white'}}> 
                {this.renderPeople()}
            </div>
        )
    }
}

export default PeopleList
