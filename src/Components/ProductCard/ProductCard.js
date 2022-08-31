import React,{useEffect, useState} from 'react'
import {Card,Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { IncreaseTotal } from '../../slices/cartItemsTotalSlice';

const ProductCard = ({id=0,image,brandName,productName,price,userId=0,status}) => {

    const [inCart,changeInCart] = useState("Add To Cart");
    const [buttonDisable,changeButtonDisable] = useState(false);
    const [buttonVariant,changeButtonVariant] = useState("primary");
    const dispatch = useDispatch();
    
    useEffect(()=>{
    if(status){
      for(let i=0;i<status.length;i++){
          if(status[i].product_id===id){
              if(status[i].cart_status==='T'){
                changeInCart("Item In Cart");
                changeButtonDisable(true);
                changeButtonVariant("dark");
              }
              
          }
      }
    }
    },[status,id]);

    const addToCart=()=>{
        changeInCart("Item In Cart");
        changeButtonDisable(true);
        changeButtonVariant("dark");
        if(userId){
            fetch("https://shopping-website-backend.adaptable.app/cart",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    productId:id,
                    customerId:userId,
                    status:'T'
                })
            })

            fetch("https://shopping-website-backend.adaptable.app/carttotalitems",{
                method:"put",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                    customerId:userId,
                    operation:"I"
                    
                })
            })
            .then(data=>data.json())
            .then(dispatch(IncreaseTotal()))
            
        }
    }
    
    return(
        <Card style={{ width: '18rem', margin:'20px',borderRadius:"15px"}}>
            <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down',padding:'10px'}} variant="top" src={image} />
            <Card.Body>
                <Card.Subtitle>{brandName}</Card.Subtitle>
                <Card.Title>{productName}</Card.Title>
                <Card.Text>
                Rs.{price}
                </Card.Text>
                <Button disabled={buttonDisable} variant={buttonVariant} onClick={addToCart}>{inCart}</Button>
            </Card.Body>
        </Card>
    );
}


export default ProductCard;
