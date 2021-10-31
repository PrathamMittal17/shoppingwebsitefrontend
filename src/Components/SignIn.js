import React,{useState,useContext} from "react";
import { Form,Button } from "react-bootstrap";
import './Register/Register.css';
import { DisplayContext } from "../App";
import { RouteContext } from "../App";
import { UserDetails } from "../App";
const SignIn=()=>{
    /* eslint-disable no-unused-vars */

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const [route,changeRoute] = useContext(RouteContext);
    const [display,changeDisplay] = useContext(DisplayContext);
    const [user,loadUser] = useContext(UserDetails);
/* eslint-disable no-unused-vars */


    const changeEmail = (event) =>{
        setEmail(event.target.value);
    }

    const changePassword = (event) =>{
        setPassword(event.target.value);
    }

    const login = ()=>{
        fetch("http://localhost:5001/login",{
            method:"post",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        .then(data=>data.json())
        .then(user=>{
            if(user.id){
                changeRoute("loggedin");
                changeDisplay('');
                loadUser(user);
            }
        })
    }
    return(
        <Form >
            
            
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address:" onChange={changeEmail}/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password:" onChange={changePassword}/>
                
            </Form.Group>
            <Button variant="primary" onClick={login}>
                Sign In
            </Button>

        </Form>
        
        
    );
}

export default SignIn;