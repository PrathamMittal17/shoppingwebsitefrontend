import React from 'react'
import {Card,Button} from 'react-bootstrap';
const ProductCard = () => {

    return(
        <Card style={{ width: '18rem', margin:'20px'}}>
            <Card.Img variant="top" src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png" />
            <Card.Body>
                <Card.Subtitle>Brand Name</Card.Subtitle>
                <Card.Title>Product Name</Card.Title>
                <Card.Text>
                Price
                </Card.Text>
                <Button variant="primary">Add to cart</Button>
            </Card.Body>
        </Card>
    );
}


export default ProductCard;