import {Button, Image,Tab,Tabs,Spinner} from 'react-bootstrap';
import React, { useEffect,useState } from 'react'
import './ProductDetails.css'
import { useDispatch } from 'react-redux';
import ProductCard from './ProductCard';
import { IncreaseTotal } from '../../slices/cartItemsTotalSlice';
import { useParams } from 'react-router-dom';

const ProductDetails = ({userId}) =>{
    const {id} = useParams();
    const[productDetails,setDetails] = useState(null);
    const[load,setLoad] = useState(false)
    const [recommendedProduct,setrecommendedProduct] = useState([])
    const [inCart,changeInCart] = useState(true);
    const[cartInfoStatus,setCartInfoStatus] = useState(false)
    const dispatch = useDispatch();
    
    
    
    useEffect(()=>{
        
        window.scrollTo(0, 0)
        fetch("https://shopping-website-backend.adaptable.app/getitemcartstatus",{
            method:"post",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                customerId:userId,
                productId:id
                
               })
        })
        .then(data=>data.json())
        .then(data=>{
            if(data.cart_status==='T'){
                changeInCart(true)
            }
            else{
                changeInCart(false)
            }
            setCartInfoStatus(true)
        })

        fetch("https://shopping-website-backend.adaptable.app/getProductDetailsFull",{
            method:"post",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                productId:id
            })
        })
        .then(data=>data.json())
        .then(data=>setDetails(data))


        fetch("https://shopping-website-backend.adaptable.app/recommend",{
            method:"post",
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                'productId':id
            })
        })
        .then(data=>data.json())
        .then(data=>Object.values(data).forEach((id) => {
            fetch("https://shopping-website-backend.adaptable.app/getProductDetailsHalf",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    productId:id
                })
            })
            .then(data=>data.json())
            .then(data=>setrecommendedProduct(current => [...current, data]));
        }))
        return () => {
            setrecommendedProduct([])
            setDetails("")
            setLoad(false)
            setCartInfoStatus(false)
        }
    },[id,userId])


    useEffect(()=>{
        if(recommendedProduct.length===5 && productDetails && cartInfoStatus){
            setLoad(true)
        }
    },[recommendedProduct.length,productDetails,cartInfoStatus])

    
    const addToCart=()=>{
        changeInCart(true)
        if(userId){
            fetch("https://shopping-website-backend.adaptable.app/cart",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    productId:id,
                    customerId:userId,
                    status:'T'
                })
            })

            fetch("https://shopping-website-backend.adaptable.app/carttotalitems",{
                method:"put",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                    customerId:userId,
                    operation:"I"
                    
                })
            })
            .then(data=>data.json())
            .then(dispatch(IncreaseTotal()))
            
        }
    }
    
  
    if(load){
    return(
        <div style={{padding:'20px'}}>
            <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
                <p className='name'>{productDetails.product_name}</p>
                <Image width="230px" src={productDetails.img}  fluid alt="Product Image"/>
                <div className="buttons">
                    <p className="price">Price: Rs.{productDetails.price}</p>
                    {inCart ? 
                    <Button disabled={true} variant="dark">Item in Cart</Button> :
                    <Button disabled={false} variant="primary" onClick={addToCart}>Add to Cart</Button>}
                </div>
                <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="about" title="About ">
                        <p className='about'>{productDetails.about}</p>
                    </Tab>
                    <Tab eventKey="recommended" title="More Like This">
                        <div className='RecommendedList'>
                           {
                           recommendedProduct.map((product,)=>{
                                return <ProductCard 
                                id={product.product_id}
                                image = {product.img}
                                productName = {product.product_name}
                                price={product.price}
                                key={product.product_id}

                                />
                        
                            })
                            
                            
                                
                           
                        }
                        </div>
                    </Tab>
                </Tabs>

            </div>
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

export default ProductDetails;