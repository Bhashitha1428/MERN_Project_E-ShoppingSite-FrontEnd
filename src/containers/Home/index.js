import React from 'react'
import Layout from '../../components/Layout'
import { Col, Container, Jumbotron, Row  } from 'react-bootstrap'
import './style.css'
function Home() {
    return (
        <Layout>
            <Container fluid>
         <Row>
             <Col md={2} className='sidebar '>Side Bar</Col>
             <Col md={10} style={{marginLeft:'auto'}}>Container</Col>
         </Row>
         </Container>
        </Layout>
     
    )
}

export default Home
