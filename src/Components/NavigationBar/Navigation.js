import React from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { changeRoute } from '../../slices/routeSlice';
import { loadUserAccount } from '../../slices/loadUserSlice';
import { changeDisplay } from '../../slices/displaySlice';
import './Navigation.css'

const Navigation= ({cartItems}) => {
    const dispatch = useDispatch();
    const route = useSelector((state)=> state.routeChange.route);

    return(
        <Navbar expand="sm">
        <Container>
        <Navbar.Brand as={Link} to="/"><span className="brand-name h4">Thrifty<span className="box-text">Box</span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            {route==="loggedin"
            
            ?
            
            <Nav className="ms-auto" style={{gap:"10px"}}>
                e
                <div style={{display:"flex"}} className="cart">
                    <Nav.Link as={Link} to="/cart"><h5 className="black">Cart</h5></Nav.Link>
                    <span style={{fontWeight:"bold",color:"#ec1c24"}}>{cartItems}</span>
                </div>

                <Nav.Link as={Link} to="/profile"><h5 className="black">Profile</h5></Nav.Link>
                <Nav.Link onClick={()=>{
                    dispatch(loadUserAccount(' '));
                    dispatch(changeRoute("loggedout"));
                    localStorage.removeItem("user");
                    localStorage.removeItem("id");
                }}><h5 className="black">Sign Out</h5></Nav.Link>
            </Nav>
            :
            <Nav className="ms-auto" style={{gap:"10px"}}>
                <Nav.Item style={{cursor:"pointer"}} onClick={()=>dispatch(changeDisplay('register'))}><h5 className="black">Register</h5></Nav.Item>
                <Nav.Item  style={{cursor:"pointer"}} onClick={()=>dispatch(changeDisplay('signin'))}><h5 className="black">Sign In</h5></Nav.Item>
            </Nav>
            
            }
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );

}


export default Navigation;