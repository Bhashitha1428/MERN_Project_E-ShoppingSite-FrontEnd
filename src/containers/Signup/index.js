import React from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import {Redirect} from 'react-router-dom'
import {  useSelector} from 'react-redux'

function Signup() {
    const token=localStorage.getItem('token');

    const auth=useSelector(state => state.auth)
//console.log(auth.authenticate)
    if(auth.authenticate){
        return <Redirect to={'/'}/>
    }
    // if (token) {
    //     //console.log("Bhashitha");
    //     return <Redirect to={'/'} />
    // }
    
    return (
        <Layout>
            <Container style={{ marginTop: "50px" }}>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Row>
                                <Col md={6} >
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value="cc"
                                        type='text'
                                        onChanege={() => { }}

                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value="cc"
                                        type='text'
                                        onChanege={() => { }}

                                    />
                                </Col>

                            </Row>
                            <Input
                                label="Email address"
                                placeholder="Email address"
                                value=""
                                type='email'
                                errorMessage='Well never share your email with anyone else'
                                onChanege={() => { }}

                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value=""
                                type='password'
                                onChanege={() => { }}

                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>

        </Layout>
    )
}

export default Signup
