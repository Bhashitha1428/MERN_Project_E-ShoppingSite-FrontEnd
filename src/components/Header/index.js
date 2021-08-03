import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useSelector ,useDispatch} from 'react-redux'

import {signout} from '../../actions'


function Header(props) {
    const auth = useSelector(state => state.auth)
    const dispatch=useDispatch()
    

    const logout=()=>{
     
        dispatch(signout())

    }

    var navLinks;
    if (!auth.authenticate) {
        navLinks = (
        <Nav>
            <li class="nav-item">
                <NavLink class="nav-link active" to='/signin'>Signin</NavLink>
            </li>
            <li class='nav-item'>
                <NavLink class="nav-link active" to='/signup'>Signup</NavLink>
            </li>
        </Nav>)
    } else {
        navLinks = (
        <Nav>
            <li class="nav-item">
                <span class="nav-link active" onClick={logout} >Signout</span>
            </li>

        </Nav>)
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
                <Container fluid>
                    <NavLink class="nav-link active" to='/'>
                        <Navbar.Brand >Admin dashboard</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        </Nav>
                        {navLinks}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
