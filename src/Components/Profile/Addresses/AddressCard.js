import React, { useContext } from "react";
import { Card,Button } from "react-bootstrap";
import { addressContext } from "./Addresses";
import { faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AddressCard = ({index,ad,id=0}) => {
    const addressSplit = ad.split("\n")
    const[address,setAddress] = useContext(addressContext);

    const deleteAddress = () => {
        const tempAddress=[...address]
        tempAddress.splice(index,1);
        setAddress(tempAddress);
        fetch("https://shopping-website-backend.adaptable.app/deleteAddress",{
                method:"delete",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    address_id:id
                })
            })
        
    }

  
        return(
            <Card style={{ width: '30rem',borderRadius:"10px",boxShadow:'1px 2px 0 0 #CBC6C6'}} key={index}>
                <Card.Body>
                    <Card.Subtitle style={{fontWeight:'bold'}}>{addressSplit[0]}</Card.Subtitle>
                    <Card.Text>{addressSplit[1]}<br/>{addressSplit[2]}<br/>{addressSplit[3]}<br/>{addressSplit[4]}<br/>{addressSplit[5]}</Card.Text>
                </Card.Body>
                <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
                    <Button size="md" variant="outline-danger" style={{margin:"10px"}} onClick={deleteAddress}>
                            <FontAwesomeIcon size="lg" style={{fontSize:"1rem"}}icon={faTrashAlt} />
                    </Button>
                </div>
            </Card>
        )
    
}

export default AddressCard;