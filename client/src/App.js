
import './App.css';
import RenterLogin from './components/renter-login'
import React from "react";
import {Route} from 'react-router-dom'
import SignUp from './components/SignUp'




function App() {
  

  return (
    <div className="App">
      <RenterLogin />
      <Route path='/signup'>
        <SignUp />
      </Route>

    </div>
  );
}

export default App;
