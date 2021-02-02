
import './App.css';
import RenterLogin from './components/renter-login'
import React from "react";
import {Route} from 'react-router-dom'
import SignUp from './components/SignUp'
import OwnerPostItem from './components/OwnerPostItemForm'



function App() {
  

  return (
    <div className="App">
      <RenterLogin />
      <Route path='/signup'>
        <SignUp />
      </Route>
      <OwnerPostItem/>

    </div>
  );
}

export default App;
