import React,{useContext} from 'react'
import { Navbar,Nav,Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { DisplayContext, RouteContext,CartItemsTotal,UserDetails } from '../../App';
import './Navigation.css'
const Navigation= () => {
    const [,changeDisplay] = useContext(DisplayContext);
    const [cartItems,]  = useContext(CartItemsTotal)
    const [,loadUser] = useContext(UserDetails);
    const [route,changeRoute] = useContext(RouteContext)
    return(
        <Navbar expand="sm">
        <Container>
        <Navbar.Brand as={Link} to="/"><span className="brand-name h4">Thrifty<span className="box-text">Box</span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            {route==="loggedin"
            ?
            <Nav className="ms-auto" style={{gap:"10px"}}>
                <div style={{display:"flex"}} className="cart">
                    <Nav.Link as={Link} to="/cart"><h5 className="black">Cart</h5></Nav.Link>
                    <span style={{fontWeight:"bold",color:"#ec1c24"}}>{cartItems}</span>
                </div>

                <Nav.Link as={Link} to="/profile"><h5 className="black">Profile</h5></Nav.Link>
                <Nav.Link onClick={()=>{
                    loadUser('');
                    changeRoute('loggedout');
                    localStorage.removeItem("user");
                    localStorage.removeItem("id");
                }}><h5 className="black">Sign Out</h5></Nav.Link>
            </Nav>
            :
            <Nav className="ms-auto" style={{gap:"10px"}}>
                <Nav.Item style={{cursor:"pointer"}} onClick={()=>changeDisplay("register") }><h5 className="black">Register</h5></Nav.Item>
                <Nav.Item  style={{cursor:"pointer"}} onClick={()=>changeDisplay("signin")}><h5 className="black">Sign In</h5></Nav.Item>
            </Nav>
            
            }
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );

}


export default Navigation;