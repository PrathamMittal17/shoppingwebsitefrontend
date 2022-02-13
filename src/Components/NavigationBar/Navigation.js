import React from 'react'
import { Navbar,Nav,Container,Dropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { changeRoute } from '../../slices/routeSlice';
import { loadUserAccount } from '../../slices/loadUserSlice';
import { changeDisplay } from '../../slices/displaySlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Navigation.css'

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="/dropdown"
      ref={ref}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      style={{color:'white'}}
    >
      <FontAwesomeIcon icon={faUser}  style={{fontSize:'1.75rem'}} className="hover-border"/>
      {children}
    </a>
  ));

const Navigation= ({cartItems}) => {
    const dispatch = useDispatch();
    const route = useSelector((state)=> state.routeChange.route);

    return(
        <Navbar  style={{backgroundColor:"#131921"}} sticky="top" expand="sm">
        <Container>
        <Navbar.Brand as={Link} to="/"><span className="brand-name h4">Thrifty<span className="box-text">Box</span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            {route==="loggedin"
            
            ?
            
            <Nav className="ms-auto" style={{gap:"30px",display:'flex',justifyContent:'center',alignItems:'center',}}>
                <div style={{display:"flex"}} className="cart">
                    <Nav.Link as={Link} to="/cart" style={{color:'white'}} className="hover-border">
                        <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:'1.75rem'}} />
                    </Nav.Link>
                    <span style={{fontWeight:"bold",color:"#F08804",marginLeft:"2px"}}>{cartItems}</span>
                </div>
                    

                    

                        

                    <Dropdown >
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"/>
                        
                        <Dropdown.Menu style={{textAlign:'center',margin:"15px -100px"}}>

                            <Dropdown.Item >
                                <Nav.Link as={Link} to="/profile" style={{color:'black'}}>
                                    My Profile
                                </Nav.Link>
                            </Dropdown.Item>

                            <Dropdown.Item >
                                <Nav.Link onClick={()=>{
                                    dispatch(loadUserAccount(' '));
                                    dispatch(changeRoute("loggedout"));
                                    localStorage.removeItem("user");
                                    localStorage.removeItem("id");
                                    }} style={{color:'black'}}>
                                    Sign Out
                                </Nav.Link>
                
                            </Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>

                    
                    


                
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