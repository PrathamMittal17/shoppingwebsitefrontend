import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import './Register/Register.css';
import { useDispatch } from "react-redux";
import { loadUserAccount } from "../slices/loadUserSlice";
import { changeRoute } from "../slices/routeSlice";
import { changeDisplay } from "../slices/displaySlice";
import validator from 'validator';

const SignIn=()=>{

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[emptyEmail,setEmptyEmail] = useState(true);
    const[emptyPassword,setEmptyPassword] = useState(true);
    const[EmailBottomText,setEmailBottomText] = useState("");
    const[passwordBottomText,setPasswordText] = useState("");
    const[rightDetails,setRightDetails] = useState(true);
    const dispatch = useDispatch();


    const changeEmail = (event) =>{
        setEmptyEmail(false)
        setEmail(event.target.value);
        setRightDetails(true)
    }

    const changePassword = (event) =>{
        setEmptyPassword(false)
        setPassword(event.target.value);
        setRightDetails(true)
    }

    const login = ()=>{
        if(validator.isEmpty(email)){
            setEmptyEmail(true)
            setEmailBottomText("Email can't be empty")
        }
        else if(!validator.isEmail(email)){
            setEmptyEmail(true)
            setEmailBottomText("Invalid Email")
        }
        if(validator.isEmpty(password)){
            setEmptyPassword(true)
            setPasswordText("Password can't be empty")
        }

        if((!emptyEmail && validator.isEmail(email)) && !validator.isEmpty(password)){
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
            else if(user==='wrong credentials'){
                setRightDetails(false)
            }
        })
        .catch(err => console.log('Request Failed'));
    }


        
    }
    return(
        <Form >
            
            <Form.Label><h4>Sign In</h4></Form.Label>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address:" onChange={changeEmail}/>
            </Form.Group>
            {emptyEmail?<Form.Label><b>{EmailBottomText}</b></Form.Label>:""}

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password:" onChange={changePassword}/>
            </Form.Group>
            {emptyPassword?<Form.Label><b>{passwordBottomText}</b></Form.Label>:""}

            <Button variant="primary" onClick={login}>Sign In</Button>
            <br/>
            {rightDetails?"":<Form.Label><b>Invalid Login Details</b></Form.Label>}

        </Form>
        
        
    );
}

export default SignIn;