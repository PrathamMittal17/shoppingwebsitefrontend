import React,{useState,useEffect} from 'react'
import { Spinner,Alert } from 'react-bootstrap';
import ProductCard from './ProductCard';
import './ProductCardList.css'

const ProductCardList = ({products,userId=0}) => {
    
    const [status,setStatus] = useState(null);
    
    useEffect(()=>{
        
        fetch("https://young-refuge-95269.herokuapp.com/getitemcartstatus",{
            method:"post",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                customerId:userId
                
               })
        })
        .then(data=>data.json())
        .then(data=>setStatus(data))
        .catch(err => console.log('Request Failed'));

    },[userId])

    if(userId){
    
    
    if(products && status){
    return(
        <div className="ProductCardList">
            {
                products.map((product,i)=>{
                    return <ProductCard
                        key={products[i].product_id}
                        id={products[i].product_id}
                        image={products[i].img}
                        brandName={products[i].brand_name}
                        productName={products[i].product_name}
                        price={products[i].price}
                       userId={userId}
                       status={status}
                    />
                })
            }
        </div>
    );
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
        return <Alert variant="primary" style={{textAlign:'center'}}>Please Sign In/Register First</Alert>
    }
}

export default ProductCardList;