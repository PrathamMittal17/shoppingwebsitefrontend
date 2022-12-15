import React,{useState} from "react";
import { Button, Navbar } from "react-bootstrap";
import Addresses from "../Profile/Addresses/Addresses";
import { loadStripe } from '@stripe/stripe-js';
import { useSelector } from "react-redux";

const SelectAddress = ({userId=0,totalPrice=0}) => {
    const select = useSelector((state)=>state.changeSelect.select)
    const[selectText,setSelectText] = useState(false);
    return(
        <div>
            <Navbar  sticky="top" expand="lg" style={{display:'flex',justifyContent:'center',backgroundColor:"#131921",padding:"10px",marginBottom:'30px' }}>
                        
                        <h3 id="totalPrice" style={{color:"white"}}>Total: Rs.{totalPrice}</h3>
                        <Button type="submit" style={{marginLeft:"10px"}} onClick={()=>{
                            if(select){
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
                            }
                            else{
                                setSelectText(true)
                            }
                        }}>Payment</Button>
                
                    </Navbar>
            <h4 style={{textAlign:'center'}}>Select an Address</h4>
            {select ? "" : selectText?<h4 style={{textAlign:'center'}}>Please select one Address</h4>:"" }
                <Addresses userId={userId} checkout={true} />
            
            
        </div>
        
    )
}

export default SelectAddress;
