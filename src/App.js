import './App.css';
import { useState, useEffect,createContext } from 'react';
import {Form, Container,Navbar} from 'react-bootstrap';
import Navigation from './Components/NavigationBar/Navigation'
import {HashRouter,Route,Switch} from 'react-router-dom';
import ProductCardList from './Components/ProductCard/ProductCardList';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import OrderDone from './Components/orderdone';
import { useSelector, useDispatch } from 'react-redux'
import { loadUserAccount } from './slices/loadUserSlice';
import { changeRoute } from './slices/routeSlice';
import { changeDisplay } from './slices/displaySlice';
import { SetTotal } from './slices/cartItemsTotalSlice';
import ProductDetails from './Components/ProductCard/ProductDetails';
import CategoryBar from './Components/CategoryBar/CategoryBar';
import CategoryPage from './Components/CategoryPage';
const productContext = createContext();
const catContext = createContext();


const App=()=> {

  const [products,setProducts] = useState(null);
  const cartItems = useSelector((state)=>state.changeCartTotal.total);
  const user = useSelector((state) => state.loadUser.user);
  const [search,setSearch] = useState("");
  const [changeCategory,setChangeCategory] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user") != null){
      dispatch(loadUserAccount(JSON.parse(localStorage.getItem("user"))))
    }
  }, [dispatch])


useEffect(() => {
  if(user.id){

    dispatch(changeRoute("loggedin"));
    dispatch(changeDisplay(' '));
    localStorage.setItem("user",JSON.stringify({id:user.id,email:user.email,name:user.name}));
    
    fetch("https://shopping-website-backend.adaptable.app/getCartTotalItems",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                  custId:user.id
                    
                })
            })
        .then(data=>data.json())
        .then(total=>dispatch(SetTotal(total.cart_items)))
        .catch(err => console.log('Request Failed'));

        
  }
  
}, [user,dispatch])



 
  
    const filteredProducts = products?.filter(product=>{
      return product.product_name.toLowerCase().includes(search?.toLowerCase());
    })
    
 
  
  return (
    <HashRouter>
      <Switch>
        <Route exact path={['/category/:category','/']}>
                  <Navigation cartItems={cartItems}/>
                  
                    {user.id ?
                    <>
                    <CategoryBar/>
                    <Navbar sticky="top" style={{zIndex:'10'}}>
                    <Container> 
                      <Form className="d-flex" style={{width:'100%'}}>
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                          style={{backgroundColor:'#131921',color:"white"}}
                          onChange={(e)=>setSearch(e.target.value)}
                          value={search}
                          
                          />
                      </Form>
                    </Container>
                    </Navbar>
                    
                    <productContext.Provider value={[products,setProducts]}>
                      <catContext.Provider value={[changeCategory,setChangeCategory]}>
                        <CategoryPage/>
                      </catContext.Provider>
                    </productContext.Provider>
                    
                    </>

                    :
                    ""
                  }
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center','textTransform':'Capitalize'}}><h1>{changeCategory}</h1></div>
                   <ProductCardList products={filteredProducts} userId = {user.id}/>
        </Route>

          <Route path='/cart'>
                <Cart customerId={user.id}/>
          </Route>

          <Route path='/profile'>
            <Profile Name={user.name} Email={user.email}/>
          </Route>

          <Route path='/orderdone'>
            <OrderDone userId={user.id}/>
          </Route>
          
          {user.id?
          <Route path='/products/:id' exact>
            <Navigation cartItems={cartItems}/>
            <ProductDetails userId={user.id}/>
          </Route>
          :
          ""
          }


      </Switch>
    </HashRouter>
  );
}

export default App;
export {productContext};
export {catContext};