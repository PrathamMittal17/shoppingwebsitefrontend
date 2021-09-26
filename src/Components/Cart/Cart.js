import React from "react";
import CartItem from "./CartItem";
import { ListGroup,Button } from "react-bootstrap";

const Cart = () =>{
    return(
        <ListGroup style={{padding:"5px"}}>
            <ListGroup.Item><CartItem/></ListGroup.Item>
            <ListGroup.Item><CartItem/></ListGroup.Item>
            <ListGroup.Item><CartItem/></ListGroup.Item>
            <ListGroup.Item><CartItem/></ListGroup.Item>
            <ListGroup.Item><CartItem/></ListGroup.Item>
            <ListGroup.Item><CartItem/></ListGroup.Item>
            <ListGroup.Item><CartItem/></ListGroup.Item>
            <div class="text-center">
                <h3>Total:0</h3>
                <Button>Checkout</Button>
            </div>

        </ListGroup>
    );
}


export default Cart;