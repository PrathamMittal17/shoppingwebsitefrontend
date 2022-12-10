import React from 'react'
import { Spinner,Alert, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';
import { changeDisplay } from '../../slices/displaySlice';
import { useDispatch,useSelector} from 'react-redux';
import './ProductCardList.css'
import Register from '../Register/Register';
import SignIn from '../SignIn';
const ProductCardList = ({products,userId=0}) => {
    const display = useSelector((state)=>state.changeDisplay.display)

    const dispatch = useDispatch();
    let LoginForm =<SignIn/>;
  
    if(display==="register"){
        console.log(display)
        LoginForm=<Register/>
    }
    else if(display==="signin"){
        LoginForm=<SignIn/>
    }
   

    if(userId){
    
    
    if(products){
        if(products.length===0){

            return (
                <Container style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <h1>No Products Found</h1>
                </Container>
            )
        }
        else{
    return(
        <div className="ProductCardList">
            {
                products.map((product,i)=>{
                    
                    return <ProductCard
                        key={products[i].product_id}
                        id={products[i].product_id}
                        image={products[i].img}
                        productName={products[i].product_name}
                        price={products[i].price}
                    />
                })
            }
        </div>
        
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
        return (
        <div>
            <Alert variant="primary" style={{textAlign:'center'}}>Please&ensp; 
            <Alert.Link onClick={()=>dispatch(changeDisplay('signin'))}>Sign In</Alert.Link>
            <b>/</b>
            <Alert.Link onClick={()=>dispatch(changeDisplay('register'))}>Register</Alert.Link>&ensp;First</Alert>
            {LoginForm}

        </div>
        );
    }
}

export default ProductCardList;