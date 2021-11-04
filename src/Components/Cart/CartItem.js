import React, { useContext,useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {Button} from 'react-bootstrap';
import { cartItemsContext,totalPriceContext } from "./Cart";
const CartItem = ({index,id,productName,price,img,quantity,custId,cartTotalItems}) =>{
    
    
    const [,setTotalPrice] = useContext(totalPriceContext);
    const[cartItemsData,setCartItemsData] = useContext(cartItemsContext);

    const [qty,changeQty] = useState(quantity);
    
   
    
    
    useEffect(()=>{
        fetch("https://young-refuge-95269.herokuapp.com/updatecartitemqty",{
                                method:"put",
                                headers: {'Content-Type': 'application/json'},
                                body:JSON.stringify({
                                    cartItemId:id,
                                    qty:qty

                                })
                            })
       },[qty,id])


   

   
    const deleteCartItem = () =>{

        cartItemsData.splice(index,1)
        setCartItemsData(cartItemsData)
        setTotalPrice(totalPrice=>totalPrice-(Number(price)*qty))
        fetch("https://young-refuge-95269.herokuapp.com/removecartitem",{
                method:"delete",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    item_id:id
                })
            })

       

       
            

        fetch("https://young-refuge-95269.herokuapp.com/carttotalitems",{
                method:"put",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                    customerId:custId,
                    operation:"D"
                    
                })
            })
            .then(data=>data.json())
            .then(total=>cartTotalItems[1](total))
 
      
    }

    return(
        <div>
            <div style={{display:"flex",flexWrap:"wrap"}}>
                <img src={img} alt="item" style={{margin:"5px",width:"100px",height:"100px",objectFit:'scale-down'}}/>
                <div style={{display:"flex",flexDirection:"column",wordBreak:"break-all"}}>
                    <h3 style={{margin:"5px"}}>{productName}</h3>
                    <h3 style={{margin:"5px"}}>Rs.{price*qty}</h3>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                <Button size="sm" variant="outline-primary" style={{margin:"20px"}} onClick={()=>{
                    if(qty<4){
                        changeQty(qty+1)
                        setTotalPrice(totalPrice=>totalPrice+Number(price))

                        
                    }

                }}>
                    <FontAwesomeIcon size="lg" style={{fontSize:"1rem"}}icon={faPlus} />
                </Button>
                <h4>{qty}</h4>
                <Button size="sm" variant="outline-primary" style={{margin:"20px"}} onClick={()=>{
                    if(qty>1){
                        changeQty(qty-1);
                        setTotalPrice(totalPrice=>totalPrice-Number(price))
                    }

                       
                }}>
                        <FontAwesomeIcon size="lg" style={{fontSize:"1rem"}}icon={faMinus} />
                </Button>

                <Button size="md" variant="outline-danger" style={{margin:"10px"}} onClick={deleteCartItem}>
                    <FontAwesomeIcon size="lg" style={{fontSize:"1rem"}}icon={faTrashAlt} />
                </Button>
                

            </div>

        </div>
    );
}


export default CartItem;