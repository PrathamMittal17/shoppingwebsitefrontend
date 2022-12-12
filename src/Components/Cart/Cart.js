import React,{useState,useEffect, createContext} from "react";
import CartItem from "./CartItem";
import { loadStripe } from '@stripe/stripe-js';
import { ListGroup,Button,Spinner,Navbar } from "react-bootstrap";
const totalPriceContext = createContext();
const cartItemsContext = createContext();
const Cart = ({customerId=0}) =>{

    const[cartItemsData,setCartItemsData] = useState(null);
    const[totalPrice,setTotalPrice] = useState(0);
    useEffect(() => {
        let componentMounted = true;

        fetch("https://shopping-website-backend.adaptable.app/cartitem",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    customerId:customerId
                })
            })
            .then(data=>data.json())
            .then(product=>{
                if(componentMounted){
                    setCartItemsData(product)
                }
            })
            .catch(err => console.log('Request Failed'))
            return () => {
                componentMounted = false;
               }

        }, [customerId]);

    

    if(cartItemsData){
            if(cartItemsData.length>0){
                return(
                <div>
                    <Navbar  sticky="top" expand="lg" style={{display:'flex',justifyContent:'center',backgroundColor:"#131921",padding:"10px" }}>
                        
                        <h3 id="totalPrice" style={{color:"white"}}>Total: Rs.{totalPrice}</h3>
                        <Button type="submit" style={{marginLeft:"10px"}} onClick={()=>{
                            fetch("https://shopping-website-backend.adaptable.app/create-checkout-session",{
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
                
                    </Navbar>
                <ListGroup style={{padding:"5px"}}>
                    

                {cartItemsData.map((product,i)=>{
                    if(totalPrice===0){
                        setTotalPrice(totalPrice=>totalPrice+(cartItemsData[i].price*cartItemsData[i].qty))
                    }

                        return (
                            
                            <ListGroup.Item key={i} style={{borderRadius:"15px",boxShadow:'1px 2px 0 0 #CBC6C6'}}>
                                
                                        <totalPriceContext.Provider value={[totalPrice,setTotalPrice]}>
                                            <cartItemsContext.Provider value={[cartItemsData,setCartItemsData]}>
                                                <CartItem
                                                    index = {i}
                                                    key={cartItemsData[i].cart_item_id}
                                                    id={cartItemsData[i].cart_item_id}
                                                    productName={cartItemsData[i].product_name}
                                                    price={cartItemsData[i].price}
                                                    img = {cartItemsData[i].img}
                                                    quantity = {cartItemsData[i].qty}
                                                    custId={customerId}
                                                />
                                            </cartItemsContext.Provider>
                                        </totalPriceContext.Provider>
                                
                            
                    </ListGroup.Item>
                    
                    );

                
                })
        }

        

    </ListGroup>
    </div>
    
    );

    }
    else if(cartItemsData.length===0){
        return <h1 style={{textAlign:"center"}}>Cart is empty</h1>;
    }
}
else{
    return (
        <div style={{textAlign:'center',padding:'100px'}}>
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        </div>
    );
}


       
        
       
    
}


export default Cart;
export {totalPriceContext};
export {cartItemsContext};