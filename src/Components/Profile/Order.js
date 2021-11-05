import React from "react";

const OrderItem=({product_name,qty,img,price,date})=>{

    return(
        <>
        <h3>Purchased on : {date.slice(0,10)}</h3>
        <div style={{display:"flex",flexWrap:"wrap"}}>
                <img src={img} alt="item" style={{margin:"10px",width:"100px",height:"100px",objectFit:'scale-down'}}/>
                <div style={{display:"flex",flexDirection:"column",wordBreak:"break-word"}}>
                    <h3 >{product_name}</h3>
                    <h3>Qty:{qty}</h3>
                    <h3>Rs.{price}</h3>
                </div>
        </div>
        </>
    );
}

export default OrderItem;