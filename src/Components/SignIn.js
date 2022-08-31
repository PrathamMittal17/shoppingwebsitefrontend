import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import './Register/Register.css';
import { useDispatch } from "react-redux";
import { loadUserAccount } from "../slices/loadUserSlice";
import { changeRoute } from "../slices/routeSlice";
import { changeDisplay } from "../slices/displaySlice";
const SignIn=()=>{
    /* eslint-disable no-unused-vars */

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
/* eslint-disable no-unused-vars */
    const dispatch = useDispatch();


    const changeEmail = (event) =>{
        setEmail(event.target.value);
    }

    const changePassword = (event) =>{
        setPassword(event.target.value);
    }

    const login = ()=>{
        fetch("https://shopping-website-backend.adaptable.app/login",{
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
                dispatch(changeRoute("loggedout"));
                dispatch(changeDisplay(' '));
                dispatch(loadUserAccount(user));
            }
        })
        .catch(err => console.log('Request Failed'));

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