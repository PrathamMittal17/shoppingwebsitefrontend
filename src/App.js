import './App.css';
import { createContext, useState, useEffect } from 'react';
import Navigation from './Components/NavigationBar/Navigation'
import {BrowserRouter,Route,Switch,HashRouter} from 'react-router-dom';
import ProductCardList from './Components/ProductCard/ProductCardList';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import SignIn from './Components/SignIn';
import OrderDone from './Components/orderdone';
const RouteContext = createContext();
const DisplayContext = createContext();
const UserDetails = createContext();
const CartItemsTotal = createContext();
const App=()=> {


  const [route,changeRoute] = useState('loggedout');
  const [display,changeDisplay] = useState('');
  const [user,loadUser]  = useState({});
  const [products,setProducts] = useState([]);
  const [cartItems,setCartItems] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("user") != null){
      loadUser(JSON.parse(localStorage.getItem("user")))
    }
    
    fetch("http://localhost:5001/products")
    .then(response=>response.json())
    .then(data=>setProducts(data))
    .catch(err => console.log('Request Failed', err));
    
      
}, [])

useEffect(() => {
  if(user.id){

    changeRoute("loggedin");
    changeDisplay('');
    localStorage.setItem("user",JSON.stringify({id:user.id,email:user.email,name:user.name}));
    fetch("http://localhost:5001/getCartTotalItems",{
                method:"post",
                headers: {'Content-Type': 'application/json'},
                body:JSON.stringify({
                    
                  custId:user.id
                    
                })
            })
        .then(data=>data.json())
        .then(total=>setCartItems(total.cart_items))
  }
  
}, [user])



  let LoginForm = '';
  
  if(display==="register"){
    LoginForm=<Register/>
  }
  else if(display==="signin"){
    LoginForm=<SignIn/>
  }
  return (
    <BrowserRouter>
     
     
    <Switch>
        <Route exact path='/'>
          <RouteContext.Provider value={[route,changeRoute]}>
            <DisplayContext.Provider value={[display,changeDisplay]}>
              <CartItemsTotal.Provider value={[cartItems,setCartItems]}>
                <UserDetails.Provider value={[user,loadUser]}>
                  <Navigation />
                </UserDetails.Provider>
            </CartItemsTotal.Provider>
              <UserDetails.Provider value={[user,loadUser]}>
              {LoginForm}
              </UserDetails.Provider>
          </DisplayContext.Provider>
          </RouteContext.Provider>
          <UserDetails.Provider value={[user,loadUser]}>
          <CartItemsTotal.Provider value={[cartItems,setCartItems]}>
              <ProductCardList products={products}/>
          </CartItemsTotal.Provider>
          </UserDetails.Provider>
        </Route>
        <Route path='/cart'>
          <CartItemsTotal.Provider value={[cartItems,setCartItems]}>
              <Cart customerId={user.id}/>
          </CartItemsTotal.Provider>
        </Route>

        <Route path='/profile'>
          <Profile Name={user.name} Email={user.email}/>
        </Route>

        <Route path='/orderdone'>
          <OrderDone/>
        </Route>

        

      </Switch>
    </BrowserRouter>
  );
}

export default App;
export {RouteContext};
export {DisplayContext};
export {UserDetails};
export {CartItemsTotal};