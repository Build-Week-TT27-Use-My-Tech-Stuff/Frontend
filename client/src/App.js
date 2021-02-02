
import './App.css';
import RenterLogin from './components/renter-login'
import React from "react";
import {Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import OwnerDashbaord from './components/owner-dashboard'



function App() {
  

  return (
    
    <div className="App">
      <OwnerDashbaord />
       <RenterLogin />
      <Route path='/signup'>
        <SignUp />
      </Route> 

    </div>
  );
}

export default App;
