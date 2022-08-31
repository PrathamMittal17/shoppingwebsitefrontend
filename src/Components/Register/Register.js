import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import './Register.css'
import { loadUserAccount } from "../../slices/loadUserSlice";
import { changeRoute } from "../../slices/routeSlice";
import { changeDisplay } from "../../slices/displaySlice";

const Register=()=>{
    /* eslint-disable no-unused-vars */

    const[email,setEmail] = useState('');
    const[fname,setFname] = useState('');
    const[lname,setLname] = useState('');
    const[password,setPassword] = useState('');

    const dispatch = useDispatch();



    const submitRegister = ()=>{
        fetch("https://shopping-website-backend.adaptable.app/register",{
            method:"post",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                fname:fname,
                lname:lname,
                email:email,
                password:password
            })
        })
        .then(data=>data.json())
        .then(user=>{
            if(user.id){
                dispatch(changeRoute("loggedin"));
                dispatch(changeDisplay(' '));
                dispatch(loadUserAccount(user));

            }
        })
        .catch(err => console.log('Request Failed'));

    }

    const changeEmail = (event) =>{
        setEmail(event.target.value);
    }

    const changeFname = (event) =>{
        setFname(event.target.value);
    }
    
    const changeLname = (event) =>{
        setLname(event.target.value);
    }

    const changePassword = (event) =>{
        setPassword(event.target.value);
    }

   
    return(
        <Form >
            <Form.Group className="mb-3" controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name:" onChange={changeFname} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name:" onChange={changeLname}/>
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address:" onChange={changeEmail} />
                
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password:" onChange={changePassword}/>
               
            </Form.Group>
            <Button variant="primary" onClick={submitRegister}>
                Register
            </Button>

        </Form>
        
        
    );
}

export default Register;