import React,{useState,useEffect, createContext,useContext} from "react";
import CartItem from "./CartItem";
import { loadStripe } from '@stripe/stripe-js';

import { ListGroup,Button } from "react-bootstrap";
import { CartItemsTotal } from "../../App";
const removeItemContext = createContext();
const totalPriceContext = createContext();
const Cart = ({customerId=0}) =>{

    const[cartItemsData,setCartItemsData] = useState([]);
    const[removeItem,setRemoveItem] = useState(false);
    const[totalPrice,setTotalPrice] = useState(0);
    const [cartItems,setCartItems]  = useContext(CartItemsTotal);

    useEffect(() => {
        
        fetch("https://young-refuge-95269.herokuapp.com/cartitem",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    customerId:customerId
                })
            })
            .then(data=>data.json())
            .then(product=>setCartItemsData(product))
            .then(setRemoveItem(false))
            .catch(err => console.log('Request Failed'));
            

        }, [customerId,removeItem]);

    
    
   
    if(cartItemsData.length>0){
        return(
        <ListGroup style={{padding:"5px"}}>
        {cartItemsData.map((product,i)=>{
            if(totalPrice===0){
                setTotalPrice(totalPrice=>totalPrice+(cartItemsData[i].price*cartItemsData[i].qty))
            }

                return (
                    <ListGroup.Item key={i}>
                           
                            <removeItemContext.Provider value={[removeItem,setRemoveItem]}>
                                <totalPriceContext.Provider value={[totalPrice,setTotalPrice]}>
                                <CartItem
                                    key={cartItemsData[i].cart_item_id}
                                    id={cartItemsData[i].cart_item_id}
                                    productName={cartItemsData[i].product_name}
                                    price={cartItemsData[i].price}
                                    img = {cartItemsData[i].img}
                                    quantity = {cartItemsData[i].qty}
                                    custId={customerId}
                                    cartTotalItems={[cartItems,setCartItems]}
                                />
                                </totalPriceContext.Provider>
                            </removeItemContext.Provider>
                        
                      
            </ListGroup.Item>
            
            );

        
        })
        }

        <div className="text-center">
                
                    <h3 id="totalPrice">Total:Rs.{totalPrice}</h3>
                    <Button type="submit" onClick={()=>{
                        fetch("https://young-refuge-95269.herokuapp.com/create-checkout-session",{
                            method:"post",
                            headers: {'Content-Type': 'application/json'},
                            body:JSON.stringify({
                                amount:totalPrice*100
                            })
                        })
                        .then(data=>data.json())
                        .then(async session=>{
                            const stripe = await loadStripe('pk_test_51JmIXVSBM1qtXmvlx74yuerGEmGuKSxOQ7Ej0XDdZrpZQFasZ4XObY9hCWjeQEXA5GDH1QBgPShHtdlKKJBBYCE400KZp54zhq');
                            stripe.redirectToCheckout({sessionId:session.id})
                            
                        }
                        )
                    }}>Checkout</Button>
               
        </div>

    </ListGroup>
    
    );

    }
    else{
        return <h1 style={{textAlign:"center"}}>Cart is empty</h1>;
    }
    


       
        
       
    
}


export default Cart;
export {removeItemContext};
export {totalPriceContext};