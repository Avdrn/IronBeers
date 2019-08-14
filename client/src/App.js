import './App.css';
import React from 'react'
import {Route, Switch} from "react-router-dom";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import AddBeer from "./components/AddBeer";
import Home from './components/Home';
import SingleBeer from "./components/SingleBeer";
import Signup from "./components/Signup";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoutes from "./components/ProtectedRoutes";






function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} /> 
 
        <Route path="/signup" component={Signup} />  
        <Route path="/logout" component={Logout} />  
        <Route path="/login" component={Login} />  
        <Route path="/beers" component={Beers} />  
        {/* <Route path="/random-beer" component={RandomBeer} />       */}
        <Route path="/new-beer" component={AddBeer} />        
        <ProtectedRoutes 
          redirectUrl='/login' 
          path="/random-beer" 
          component={RandomBeer}
              />
      <Route path="/:_id" component={SingleBeer} />  

      </Switch>
    </div>
  );
}

export default App;
