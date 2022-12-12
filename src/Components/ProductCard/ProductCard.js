import React, {useCallback} from 'react';
import {Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import './ProductCard.css'
const ProductCard = ({id=0,image,productName,price}) => {
    const history = useHistory();

    const handleOnClick = useCallback(() => {
        history.push(`/products/${id}`)
    }, [history,id]);


    return(
        <Card className="productCard"onClick={()=>handleOnClick()} style={{ width: '18rem', margin:'20px',borderRadius:"15px",cursor: "pointer",boxShadow:'0px 2px 0 0 #CBC6C6'}} >
            <Card.Img style={{width:'100%',height:'30vh',objectFit:'scale-down',padding:'10px'}} variant="top" src={image} />
            <Card.Body >
                <Card.Title>{productName}</Card.Title>
                <Card.Subtitle>
                Rs.{price}
                </Card.Subtitle>
            </Card.Body>
        </Card>
    );
}


export default ProductCard;
