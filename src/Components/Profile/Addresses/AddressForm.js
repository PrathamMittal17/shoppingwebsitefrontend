import React,{useState,useRef, useContext} from "react";
import { Form,Container,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCanPay } from "../../../slices/canPaySlice";
import { addressContext,addContext } from "./Addresses";

const AddressForm = ({userId=0}) => {
    const[,setAddress] = useContext(addressContext)
    const country = "India";
    const[,setAdd] = useContext(addContext);
    const[name,setName] = useState('');
    const[mobile,setMobile] = useState('');
    const pincode = useRef('');
    const[houseNo,setHouseNo] = useState('');
    const[area,setArea] = useState('');
    const[city,setCity] = useState('');
    const[state,setState] = useState('');
    const[invalidPincode,setInvalidPincode] = useState(false);
    const[invalid,setInvalid] = useState(false);
    const dispatch = useDispatch();

    const getFromPincode = (pincode) =>{
        fetch(`https://api.postalpincode.in/pincode/${pincode}`)
        .then(data=>data.json())
        .then(data=>{
            if(data[0].PostOffice){
                setCity(data[0].PostOffice[0].Block)
                setState(data[0].PostOffice[0].State)
            }
            else{
                setInvalidPincode(true)
            }
        })
    }

    const addAddress=()=>{
        if(name.length>0 && mobile.toString().length>0 && pincode.current.length>0 && !invalidPincode && houseNo.length>0 && area.length>0  && city.length>0 ) {
            setInvalid(false)
            setAdd(false)
            const address = `${name}\n${houseNo}\n${area}\n${city},${state} ${pincode.current}\n${country}\nPhone Number: ${mobile}`
            

            fetch("https://shopping-website-backend.adaptable.app/addAddresses",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                  customerId:userId,
                  address:address
                    
                })
            })
            .then(data=>data.json())
            .then(data=>setAddress(current => [{"address_id":data,"address":address},...current]))
            .then(dispatch(setCanPay(true)))
            
        }
        else{
            setInvalid(true)
        }
    }

    return(
        <Container className="addressForm">
            <div style={{textAlign:'left',margin:"20px 0px 20px 0"}}>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>Country</Form.Label>
                    <Form.Control type="text" value={country} disabled/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>Full Name</Form.Label>
                    <Form.Control  type="text" onChange={(event)=>setName(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>Phone Number</Form.Label>
                    <Form.Control  type="text" onChange={(event)=>setMobile(event.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>Pincode</Form.Label>
                    <Form.Control  type="text" onInput={(event)=>{
                        setCity('')
                        setState('')
                        pincode.current =  event.target.value
                        if(pincode.current.length===6){
                            getFromPincode(pincode.current)
                        }
                        setInvalidPincode(false)
                    }}/>
                    {invalidPincode?<Form.Text style={{fontWeight:"bold"}}>Invalid Pincode</Form.Text>:""}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>Flat, House no., Building, Company, Apartment</Form.Label>
                    <Form.Control  type="text" onChange={(event)=>setHouseNo(event.target.value)} autoComplete="none"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>Area, Street, Sector, Village</Form.Label>
                    <Form.Control  type="text" onChange={(event)=>setArea(event.target.value)} autoComplete="none"/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>Town/City</Form.Label>
                    <Form.Control  type="text" value={city} onChange={(event)=>setCity(event.target.value)} autoComplete="none"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight:"bold"}}>State</Form.Label>
                    <Form.Select value={state} onChange={(event)=>setState(event.target.value)} autoComplete="none">
                        <option value="Select Your State">Select Your State</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Ladakh">Ladakh</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </Form.Select>
                </Form.Group>
                {invalid ? <h6 style={{fontWeight:"bold",textAlign:'center',marginTop:"10px"}}>Fill all the details</h6> : ""}

                <Button onClick={addAddress}>Add Address</Button>

                
            </div>
        </Container>
        );
}

export default AddressForm;