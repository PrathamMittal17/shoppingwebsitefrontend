import  { useContext,useEffect} from "react";
import { useParams } from "react-router-dom";
import { productContext,catContext } from "../App";
const CategoryPage = () => {
    const [,setProducts] = useContext(productContext);
    const [,setChangeCategory] = useContext(catContext);

    const {category} = useParams();
    useEffect(()=>{
        if(category && category.length>0){
            fetch("https://shopping-website-backend.adaptable.app/productscategorywise",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                    category:category.toLowerCase()
                    
                })
            })
        .then(data=>data.json())
        .then(data=>{
            setProducts(data) 
            setChangeCategory(data[0]?.category)
        })
    
        }
        else{
            

            fetch("https://shopping-website-backend.adaptable.app/products")
            .then(response=>response.json())
            .then(data=>setProducts(data))
            .then(setChangeCategory(true))
            .catch(err => console.log('Request Failed'));
        }
        return () => {
            setChangeCategory(false)
            setProducts(null)
        }
        
    },[category,setProducts,setChangeCategory])
    
    
    

    
    return(
        <>
        </>
    )
}

export default CategoryPage;