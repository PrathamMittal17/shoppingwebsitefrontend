import React,{useEffect, useState} from 'react'
import {Card,Button} from 'react-bootstrap';


const ProductCard = ({id=0,image,brandName,productName,price,userId=0,cartTotal}) => {

    const [inCart,changeInCart] = useState("Add To Cart");
    const [buttonDisable,changeButtonDisable] = useState(false);

    useEffect(()=>{
        
        fetch("http://localhost:5001/getitemcartstatus",{
            method:"post",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                productId:id,
                customerId:userId,
               })
        })
        .then(data=>data.json())
        .then(status=>{
            if(status[0]){
                changeInCart("Item In Cart");
                changeButtonDisable(true);
            }
            else{
                changeInCart("Add to Cart");
                changeButtonDisable(false);
            }
        })
        
        
    },[userId,id]);

    const addToCart=()=>{
        changeInCart("Item In Cart");
        changeButtonDisable(true);
        if(userId){
            fetch("http://localhost:5001/cart",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    productId:id,
                    customerId:userId,
                    status:'T'
                })
            })

            fetch("http://localhost:5001/carttotalitems",{
                method:"put",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                    customerId:userId,
                    operation:"I"
                    
                })
            })
            .then(data=>data.json())
            .then(total=>cartTotal[1](total))
            
        }
    }
    
    return(
        <Card style={{ width: '18rem', margin:'20px'}}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Subtitle>{brandName}</Card.Subtitle>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                Rs.{price}
                </Card.Text>
                <Button disabled={buttonDisable} variant="primary" onClick={addToCart}>{inCart}</Button>
            </Card.Body>
        </Card>
    );
}


export default ProductCard;
