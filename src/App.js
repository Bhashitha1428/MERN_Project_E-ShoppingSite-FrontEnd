import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { isUserLoggedIn } from "./actions";
import './App.css';
import PrivateRoute from "./components/HOC/privateRoute";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import React, { useEffect } from 'react';

import {useDispatch,useSelector   } from 'react-redux'
import Order from "./containers/Order";
import Product from "./containers/Product";



 
function App() {

const dispatch = useDispatch()
const auth=useSelector(state => state.auth)

useEffect(() => {
   if(!auth.authenticate){
     dispatch(isUserLoggedIn())
     
   }
  
},[])


  return (
    
    <div className="App">
    
    <Switch>
      
      <PrivateRoute path="/" exact component={Home}/>
      <PrivateRoute path='/products' component={Product}/>
      <PrivateRoute path='/orders' component={Order}/>
      <Route path="/signin" exact component={Signin}/>
      <Route path="/signup" exact component={Signup}/>
      
    </Switch>
    

    
    </div>
  );
}

export default App;
