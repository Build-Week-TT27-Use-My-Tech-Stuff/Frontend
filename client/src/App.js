
import './App.css';
import RenterLogin from './components/renter-login'
import React from "react";
import {Route} from 'react-router-dom'
import SignUp from './components/SignUp'

import OwnerPostItem from './components/OwnerPostItemForm'

import OwnerLogin from './components/OwnerLogin'
import OwnerDashbaord from './components/owner-dashboard'
import RenterBoard from './components/renter-board'
import OwnerBoard from './components/owner-board'


function App() {
  

  return (
    <div className="App">

      <OwnerBoard/>
      <Route path='/renter-login'>
        <RenterLogin />
      </Route>
    
      <Route path='/owner/dashboard'>
      <OwnerDashbaord />
     </Route>
    
      <Route path='/signup'>
        <SignUp />
      </Route> 

      <Route path='/owner-login'>
        <OwnerLogin/>
      </Route>
      
      <Route path='/owner/post-item-form'>
      <OwnerPostItem/>
      </Route>



    </div>
  );
}

export default App;
