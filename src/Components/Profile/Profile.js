import React from "react";
import MyOrders from "./MyOrders";


const Profile = ({Name,Email}) =>{
    
    return(
       
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"}}>
            
            <h3>Name:{Name}</h3>
            <h3 style={{wordBreak:"break-word"}}>Email:{Email}</h3>
            <MyOrders/>            
        </div>

    );
}

export default Profile;