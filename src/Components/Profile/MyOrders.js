import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrderItem from "./Order";
import { Spinner } from "react-bootstrap";
const MyOrders=()=>{

    const [orders,setOrders] = useState(null);
    useEffect(()=>{
        let componentMounted = true;

        const user = localStorage.getItem("user");
        const userId = JSON.parse(user).id;
        fetch("https://shopping-website-backend.adaptable.app/gettingOrder",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    custId:userId
                })
            })
        .then(Data=>Data.json())
        .then(data=>{
            if(componentMounted){
            setOrders(data)
            }
        })
        .catch(err => console.log('Request Failed'));


        return () => {
            componentMounted = false;
           }
        },[])

        
        if(orders){
    if(orders.length===0){
        
        return (
            <div style={{marginTop:"20px"}}>
            <h3 style={{textAlign:'center'}}>You Have No Orders!</h3>
            <Link to="/"><h2 style={{textAlign:"center"}}>Continue Shopping</h2></Link>
            </div>
        );
    }
    else{
        
    return (
        <div style={{marginTop:"20px"}}>
        <h3 style={{textAlign:'center'}} >Your Orders:</h3>
       <ListGroup>
           {orders.map((order,i)=>{
                return <ListGroupItem style={{borderRadius:"15px",boxShadow:'1px 2px 0 0 #CBC6C6'}}key = {orders[i].order_id}>
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
    </div>
    
    
     );
    }
}
else{
    return (
        <div style={{marginTop:'20px',textAlign:'center'}}> 
            <Spinner animation="border" role="status" >
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}
}

export default MyOrders;