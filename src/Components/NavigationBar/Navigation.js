import React from 'react'
import { Navbar,Nav,Container,Dropdown } from 'react-bootstrap';
import {Link, useHistory} from 'react-router-dom';
import { useSelector ,useDispatch} from 'react-redux';
import { changeRoute } from '../../slices/routeSlice';
import { loadUserAccount } from '../../slices/loadUserSlice';
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

const Navigation= ({cartItems,home=false}) => {
    const dispatch = useDispatch();
    const route = useSelector((state)=> state.routeChange.route);
    const history = useHistory()


    return(
        <Navbar  style={{backgroundColor:"#131921"}} variant="dark" expand="sm">
        <Container>
        <Navbar.Brand as={Link} onClick={()=> {
            if(home){
                history.push("/")
                history.go(0)
            }
        }}to="/"><span className="brand-name h4">Thrifty<span className="box-text">Box</span></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
            {route==="loggedin"
            
            ?
            
            <Nav className="ms-auto" style={{gap:"30px",display:'flex',justifyContent:'center',alignItems:'center',}}>
                <div style={{display:"flex"}} className="cart">
                    <Nav.Link as={Link} to="/cart" style={{color:'white'}} className="hover-border">
                        <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:'1.75rem'}} />
                    </Nav.Link>
                    <span style={{fontWeight:"bold",color:"#F08804",marginLeft:"2.5px"}}>{cartItems}</span>
                </div>
                    <Dropdown >
                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"/>
                        
                        <Dropdown.Menu style={{textAlign:'center',margin:"15px -100px"}}>

                            <Dropdown.Item as={Link} to="/profile" style={{color:'black',fontSize:'18px',padding:'10px'}} >
                                    My Profile
                            </Dropdown.Item>

                            <Dropdown.Item as={Link}  style={{color:'black',fontSize:'18px',padding:'10px'}} to=""onClick={()=>{
                                    dispatch(loadUserAccount(' '));
                                    dispatch(changeRoute("loggedout"));
                                    localStorage.removeItem("user");
                                    localStorage.removeItem("id");
                                    }} >
                                    Sign Out
                
                            </Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>
                </Nav>
            :
           ''
            }
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );

}


export default Navigation;