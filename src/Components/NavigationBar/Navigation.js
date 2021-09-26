import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Navigation.css'
const Navigation= () => {

    return(
        <Navbar expand="sm">
        <Container>
        <Navbar.Brand as={Link} to="/"><span className="brand-name h4">Thrifty<span className="box-text">Box</span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/cart"><h5 className="black">Cart</h5></Nav.Link>
                <Nav.Link as={Link} to="/profile"><h5 className="black">Profile</h5></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );

}


export default Navigation;