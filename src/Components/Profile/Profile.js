import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import TypeWriterEffect from 'react-typewriter-effect';


const Profile = ({Name}) =>{
    const history = useHistory();

    const handleOnClick = useCallback((link) => {
        history.push(link)
    }, [history]);
    return(
       
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"}}>
            <TypeWriterEffect
            startDelay={50}
            text={`Hey, ${Name}`}
            typeSpeed={100}
            />
            
            <div style={{display:'flex',flexDirection:'column'}}>
            <Button style={{marginTop:"20px"}}onClick={()=>handleOnClick("myorders")}>Your Orders</Button>
            <Button style={{marginTop:"20px"}}onClick={()=>handleOnClick("myaddresses")}>Your Addresses</Button>
            </div>           
           
        </div>

    );
}

export default Profile;