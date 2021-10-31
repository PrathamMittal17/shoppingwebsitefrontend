import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderItem from "./Order";
const MyOrders=()=>{

    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        const user = localStorage.getItem("user");
        const userId = JSON.parse(user).id;
        fetch("http://localhost:5001/gettingOrder",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    custId:userId
                })
            })
        .then(Data=>Data.json())
        .then(data=>setOrders(data))
        },[])

        

    if(orders.length===0){
        
        return (
            <>
            <h3>You Have No Orders!</h3>
            <Link to="/"><h2 style={{textAlign:"center"}}>Continue Shopping</h2></Link>
            </>
        );
    }
    else{
        
    return (
        <>
        <h3>Your Orders:</h3>
       <ListGroup>
           {orders.map((order,i)=>{
                return <ListGroupItem key = {orders[i].order_id}>
                            <OrderItem
                                key = {orders[i].order_id}
                                id = {orders[i].order_id}
                                product_name={orders[i].product_name}
                                img = {orders[i].img}
                                price = {orders[i].price}
                                qty = {orders[i].qty}
                                date = {orders[i].date}
                            />
                    </ListGroupItem>
       })
    }

    </ListGroup>
    </>
    
    
     );
    }
}

export default MyOrders;