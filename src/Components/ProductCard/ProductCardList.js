import React,{useContext} from 'react'
import { UserDetails } from '../../App';
import { CartItemsTotal } from '../../App';
import ProductCard from './ProductCard';
import './ProductCardList.css'

const ProductCardList = ({products}) => {
    
    const [user] = useContext(UserDetails);
    const [cartItems,setCartItems]  = useContext(CartItemsTotal);


  
    
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
                       userId={user.id}
                       cartTotal={[cartItems,setCartItems]}
                    />
                })
            }
        </div>
    );
}

export default ProductCardList;