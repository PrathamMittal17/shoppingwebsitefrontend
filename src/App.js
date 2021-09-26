import './App.css';
import Navigation from './Components/NavigationBar/Navigation'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ProductCardList from './Components/ProductCard/ProductCardList';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

      </div>

      <Switch>
        <Route exact path='/'>
        <Navigation/>
        <ProductCardList/>
        </Route>
        <Route path='/cart' component={Cart}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
