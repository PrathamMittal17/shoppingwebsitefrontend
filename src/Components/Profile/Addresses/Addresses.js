import React, { useState, useEffect, createContext} from "react";
import { Button,Spinner,Form } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { setCanPay } from "../../../slices/canPaySlice";
import { changeSelect } from "../../../slices/radioSelectSlice";
import './address.css'
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
const addressContext = createContext();
const addContext = createContext();

const Addresses = ({userId=0,checkout=false,selectedAddress}) => {
    const[address,setAddress] = useState(null);
    const[add,setAdd] = useState(false);
    const dispatch = useDispatch();



    useEffect(()=>{
        let componentMounted = true;

        fetch("https://shopping-website-backend.adaptable.app/getAddresses",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                  customerId:userId
                    
                })
            })
            .then(data=>data.json())
            .then(data=>{
                if(componentMounted){
                    setAddress(data)
                }
            })

            return () => {
                componentMounted = false;
               }
    },[userId])

   
    

    if(!add){
        if(address){
            if(address.length>0){
                dispatch(setCanPay(true))

                return(
                <div>
                    <div style={{display:'flex',justifyContent:'center',margin:'30px 0'}}>
                        <Button onClick={()=>{
                        setAdd(true)
                        dispatch(setCanPay(false))
                        } }>Add Address</Button>
                    </div>
                    {checkout ? 
                     <div>
                     {address.map((ad,index)=>{
                         return(
                        <div key={index}> 
                            
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'20px',marginBottom:'20px',padding:'10px'}} key={index+1}>
                                    {
                                        index===0 ? <Form.Check type="radio" name="selectAddress" key={index+2} checked={selectedAddress===false} isInvalid onChange={()=>{
                                            dispatch(changeSelect(false))
                                        }}/> :
                                        <Form.Check type="radio" name="selectAddress" key={index+2} isInvalid onChange={()=>{
                                            dispatch(changeSelect(true))
                                        }}/>
                                    }
                                    
                                <addressContext.Provider value={[address,setAddress]} key={index+3}>
                                        <AddressCard index={index} ad={ad.address} id={ad.address_id} key={index+4} />
                                </addressContext.Provider>
                            </div>
                         </div>
                         
                         );
                         
                        })}
                    </div>
                     : 
                    <div className="AddressList">
                        {address.map((ad,index)=>{
                            return(
                            <addressContext.Provider value={[address,setAddress]} key={index+1}>
                                    <AddressCard index={index} ad={ad.address} id={ad.address_id} key={index+2} />
                            </addressContext.Provider>
                            
                            );
                            
                        })}
                    </div>
                    }
                </div>
                );
            }
            else{
                dispatch(setCanPay(false))
                return(
                    <>
                    <div style={{display:'flex',justifyContent:'center',margin:'30px 0'}}>
                        <Button onClick={()=>setAdd(true)}>Add Address</Button>
                    </div>
                    <h4 style={{textAlign:'center'}}>You have no addresses added</h4>
                    </>
                );
            }
        }
        else{
            return(
                <div style={{textAlign:'center',padding:'100px'}}>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            );
        }
    }
    else{
        return(
            <addressContext.Provider value={[address,setAddress]}>
                <addContext.Provider value={[add,setAdd]}>
                    <AddressForm userId={userId}/>
                </addContext.Provider>
            </addressContext.Provider>
        )
    }
}

export default Addresses;
export {addressContext};
export {addContext};