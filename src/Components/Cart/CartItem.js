import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus } from "@fortawesome/free-solid-svg-icons"



const CartItem = () =>{
    return(
        <div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <img src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png" alt="item" style={{margin:"5px",width:"100px",height:"100px"}}/>
                <div style={{display:"flex",flexDirection:"column"}}>
                    <h3 style={{margin:"5px"}}>Product Name</h3>
                    <h3 style={{margin:"5px"}}>Price</h3>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                <FontAwesomeIcon style={{margin:"10px"}}icon={faPlus}/>
                <h4>1</h4>
                <FontAwesomeIcon style={{margin:"10px"}}icon={faMinus}/>

            </div>

        </div>
    );
}


export default CartItem;