import React,{useState} from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Input from '../../components/UI/Input'
import {Redirect} from 'react-router-dom'
import {  useDispatch,useSelector} from 'react-redux'
import { signup } from '../../actions'

function Signup() {
    const [firstName, setfirstName] = useState('aa')
    const [lastName, setlastName] = useState('bb')
    const [email, setEmail] = useState('b1@gmail.com')
    const [password, setpassword] = useState('123')
    
    
    const auth=useSelector(state => state.auth)
    const user=useSelector(state => state.user)

    const dispatch = useDispatch()


    if(auth.authenticate){
        return <Redirect to={'/'}/>
    }

    const userRegister=(e)=>{
     const user={firstName,lastName,email,password}
     console.log(user)

        e.preventDefault()
        dispatch(signup(user))


    }

    
    
    return (
        <Layout>
            <Container style={{ marginTop: "50px" }}>

                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={userRegister}> 
                            <Row>
                                <Col md={6} >
                                    <Input
                                        label="First Name"
                                        placeholder="First Name"
                                        value={firstName}
                                        type='text'
                                        onChange={(e) => { setfirstName(e.target.value)}}

                                    />
                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Last Name"
                                        placeholder="Last Name"
                                        value={lastName}
                                        type='text'
                                        onChange={(e) => { setlastName(e.target.value)}}

                                    />
                                </Col>

                            </Row>
                            <Input
                                label="Email address"
                                placeholder="Email address"
                                value={email}
                                type='email'
                                errorMessage='Well never share your email with anyone else'
                                onChange={(e) => { setEmail(e.target.value)}}

                            />

                            <Input
                                label="Password"
                                placeholder="Password"
                                value={password}
                                type='password'
                                onChange={(e) => {setpassword(e.target.value) }}

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
