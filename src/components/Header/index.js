import React from 'react'
import { Navbar, Nav,Container } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavLink  class="nav-link active"  to='/'>
                    <Navbar.Brand >Admin dashboard</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                        <li class="nav-item">
                            <NavLink class="nav-link active" to='/signin'>Signin</NavLink>
                            </li>
                            <li class='nav-item'>
                            <NavLink  class="nav-link active" to='/signup'>Signup</NavLink>
                        </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
