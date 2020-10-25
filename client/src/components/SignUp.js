import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';



class SignUp extends Component {


    
    render() {
        return (
            <div>
                <Container className='signUpForm'>
                    <Row>
                        <Col sm={6}>
                            <Label for='First Name'></Label>
                            <Input type='text' name='firstName' id='firstName' placeholder='First Name'></Input>
                        </Col>
                        <Col sm={6}>
                            <Label for='Last Name'></Label>
                            <Input type='text' name='lastName' id='firstName' placeholder='Last Name'></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Label for="EMail"></Label>
                            <Input type="email" name='email' id='email' placeholder='Email'></Input>
                        </Col>
                        <Col sm={12}>
                            <Label for="Password"></Label>
                            <Input type="password" name='password' id='password' placeholder='Password'></Input>
                        </Col>
                        <Col sm={12}>
                            <Label for="Confrim Password"></Label>
                            <Input type="password" name='password' id='password' placeholder='Confrim Password'></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="buttonCol" sm='12'>
                            <Row>
                                <Button className='submitBtn' color='primary'>Submit</Button>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}




export default SignUp