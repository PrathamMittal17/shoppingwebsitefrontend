import './App.css';
import { useState, useEffect } from 'react';
import {Form, Container} from 'react-bootstrap';
import Navigation from './Components/NavigationBar/Navigation'
import {HashRouter,Route,Switch} from 'react-router-dom';
import ProductCardList from './Components/ProductCard/ProductCardList';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn';
import OrderDone from './Components/orderdone';
import { useSelector, useDispatch } from 'react-redux'
import { loadUserAccount } from './slices/loadUserSlice';
import { changeRoute } from './slices/routeSlice';
import { changeDisplay } from './slices/displaySlice';
import { SetTotal } from './slices/cartItemsTotalSlice';


const App=()=> {

  const display = useSelector((state)=>state.changeDisplay.display)
  const [products,setProducts] = useState(null);
  const cartItems = useSelector((state)=>state.changeCartTotal.total);
  const user = useSelector((state) => state.loadUser.user);
  const [search,setSearch] = useState(" ");

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user") != null){
      dispatch(loadUserAccount(JSON.parse(localStorage.getItem("user"))))
    }
    
    fetch("https://shopping-website-backend.adaptable.app/products")
    .then(response=>response.json())
    .then(data=>setProducts(data))
    .catch(err => console.log('Request Failed'));
    
    
      
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



  let LoginForm = '';
  
  if(display==="register"){
    LoginForm=<Register/>
  }
  else if(display==="signin"){
    LoginForm=<SignIn/>
  }

  
    const filteredProducts = products?.filter(product=>{
      let productName = product.brand_name +" "+ product.product_name;
      
      return productName.toLowerCase().includes(search.toLowerCase());
    })
  
  
  return (
    <HashRouter>
      <Switch>
        
          <Route exact path='/'>
                    <Navigation cartItems={cartItems}/>
                    {LoginForm}
                    {user.id ?
                    <div style={{position:'fixed',width:'100%',zIndex:'10'}}>
                    <Container > 
                      <Form className="d-flex">
                        <Form.Control
                          type="search"
                          placeholder="Search"
                          className="me-2"
                          aria-label="Search"
                          style={{backgroundColor:'#131921',color:"white"}}
                          onChange={(e)=>setSearch(e.target.value)}
                          />
                      </Form>
                    </Container>
                    </div>
                    :
                    ""
                  }
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

      </Switch>
    </HashRouter>
  );
}

export default App;
