import React from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'

function Signin() {
    return (
        <Layout>
            <Container style={{ marginTop: "50px" }}>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
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
                                placeholder="password"
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

export default Signin
