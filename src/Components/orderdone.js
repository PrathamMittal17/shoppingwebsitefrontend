import React,{useEffect} from "react";
import { Link } from "react-router-dom";


const OrderDone=({userId})=>{
    useEffect(() => {
        
        const orderItems = {};
        fetch("https://shopping-website-backend.adaptable.app/cartitem",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    customerId:userId
                })
            })
        .then(data=>data.json())
        .then(cartItems=>{
            Object.assign(orderItems,cartItems)
        Object.keys(orderItems).map((i)=>{
                    return fetch("https://shopping-website-backend.adaptable.app/creatingOrder",{
                        method:"post",
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify({
                            custId:userId,
                            productName:orderItems[i].product_name,
                            qty:orderItems[i].qty,
                            price:orderItems[i].price*orderItems[i].qty,
                            img:orderItems[i].img,
                            
                        })
                    })
                })
            
        })
        .catch(err => console.log('Request Failed'));

        
    
    }, [userId])
    return(
        <>
            <h1 style={{textAlign:"center"}}>Your Order Is successful</h1>
            <Link to="/"><h2 style={{textAlign:"center"}}>Continue Shopping</h2></Link>
        </>
    );
}

export default OrderDone;