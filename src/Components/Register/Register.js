import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import './Register.css'
import { loadUserAccount } from "../../slices/loadUserSlice";
import { changeRoute } from "../../slices/routeSlice";
import { changeDisplay } from "../../slices/displaySlice";
import validator from 'validator';


const Register=()=>{
    /* eslint-disable no-unused-vars */

    const[email,setEmail] = useState('');
    const[fname,setFname] = useState('');
    const[lname,setLname] = useState('');
    const[password,setPassword] = useState('');

    const[emptyFname,setEmptyFname] = useState(null);
    const[emptyLname,setEmptyLname] = useState(null);
    const[emptyEmail,setEmptyEmail] = useState(null);
    const[emptyPassword,setemptyPassword] = useState(null);

    const[EmailBottomText,setEmailBottomText] = useState("Email can't be empty");
    const[PasswordBottomText,setPasswordBottomText] = useState("Password can't be empty");
    const dispatch = useDispatch();

    
    const[alreadyExists,setAlreadyExists] = useState(null);


    const submitRegister = ()=>{
        if(validator.isEmpty(fname)){
            setEmptyFname(true)
        }

        if(validator.isEmpty(lname)){
            setEmptyLname(true)
        }

        if(validator.isEmpty(email)){
            setEmptyEmail(true)
            setEmailBottomText("Email can't be empty")
        }
        else if(!validator.isEmail(email)){
            setEmptyEmail(true)
            setEmailBottomText("Invalid Email")
        }

        if(validator.isEmpty(password)){
            setemptyPassword(true)
            setPasswordBottomText("Password can't be empty")
        }
        else if(!validator.isStrongPassword(password,{
            minLength:6,minLowercase:1,minNumbers:1,minSymbols:1,minUppercase:1
        })){
            setemptyPassword(true)
            setPasswordBottomText("Invalid Password")
        }

        else if(!emptyFname && (!emptyEmail && validator.isEmail(email)) && !emptyLname && (!emptyPassword &&
            validator.isStrongPassword(password,{
                minLength:6,minLowercase:1,minNumbers:1,minSymbols:1,minUppercase:1
            })
            )){
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
                    else if(user==='Unable to register'){
                        setAlreadyExists(true)
                    }
                    
                    
                })
                .catch(err => console.log(err));
                
        }
        
        

    }

    const changeEmail = (event) =>{
        setEmptyEmail(false)
        setEmail(event.target.value);
        setAlreadyExists(false)
    }

    const changeFname = (event) =>{
        setEmptyFname(false)
        setFname(event.target.value);
        setAlreadyExists(false)
    }
    
    const changeLname = (event) =>{
        setEmptyLname(false)
        setLname(event.target.value);
        setAlreadyExists(false)
    }

    const changePassword = (event) =>{
        setemptyPassword(false)
        setPassword(event.target.value);
        setAlreadyExists(false)
    }

   
    return(
        <Form >
            {alreadyExists?<Form.Label><b>User already exists please Sign In</b></Form.Label>:""}
            <Form.Label><h4>Register</h4></Form.Label>
            <Form.Group className="mb-3" controlId="fname">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name:" onChange={changeFname} />
            </Form.Group>
            {emptyFname?<Form.Label><b>First Name can't be empty</b></Form.Label>:""}

            <Form.Group className="mb-3" controlId="lname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name:" onChange={changeLname}/>
            </Form.Group>
            {emptyLname?<Form.Label><b>Last Name can't be empty</b></Form.Label>:""}

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" placeholder="Enter Email Address:" onChange={changeEmail} />
            </Form.Group>
            {emptyEmail?<Form.Label><b>{EmailBottomText}</b></Form.Label>:""}

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Enter Password:" onChange={changePassword}/>
            </Form.Group>
            {emptyPassword?<Form.Label><b>{PasswordBottomText}</b></Form.Label>:""}
            <Form.Label>• Minimum 6 letters</Form.Label>
            <Form.Label>• Minium 1 Capital Letter </Form.Label>
            <Form.Label>• Minium 1 Symbol</Form.Label>
            <Form.Label>• Minium 1 Number</Form.Label>

            <Button variant="primary" onClick={submitRegister}>
                Register
            </Button>
            <br/>
            
        </Form>
        
        
    );
}

export default Register;