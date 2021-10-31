import React,{useState,useContext} from "react";
import { Form,Button } from "react-bootstrap";
import { RouteContext } from "../../App";
import { DisplayContext } from "../../App";
import { UserDetails } from "../../App";
import './Register.css'


const Register=()=>{
    /* eslint-disable no-unused-vars */

    const[email,setEmail] = useState('');
    const[fname,setFname] = useState('');
    const[lname,setLname] = useState('');
    const[password,setPassword] = useState('');
    const [route,changeRoute] = useContext(RouteContext);
    const [display,changeDisplay] = useContext(DisplayContext);
    const [user,loadUser] = useContext(UserDetails);
    /* eslint-disable no-unused-vars */


    const submitRegister = ()=>{
        fetch("http://localhost:5001/register",{
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
                changeRoute("loggedin");
                changeDisplay('');
                loadUser(user);

            }
        })
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