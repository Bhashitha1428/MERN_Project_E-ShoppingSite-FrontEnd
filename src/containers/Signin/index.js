import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import { useDispatch, useSelector } from 'react-redux'

import { login } from "../../actions"
import { Redirect } from 'react-router-dom'

function Signin(props) {

    const [email, setEmail] = useState('bmr123@gmail.com');
    const [password, setPassword] = useState('123')
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const userLogin = (e) => {

        e.preventDefault();
        const user = {
            email, password
        }
        dispatch(login(user))



    }
    
    if (auth.authenticate) {
        //console.log("Bhashitha");
        return <Redirect to={'/'} />
    }
   //console.log("Bhashitha Ranchagoda")

    return (
        <Layout>
            <Container style={{ marginTop: "50px" }}>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userLogin}>
                            <Input
                                label="Email address"
                                placeholder="Email address"
                                value={email}
                                type='text'
                                errorMessage='Well never share your email with anyone else'
                                onChange={(e) => setEmail(e.target.value)}

                            />

                            <Input
                                label="Password"
                                placeholder="password"
                                value={password}
                                type='password'
                                onChange={(e) => setPassword(e.target.value)}

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
