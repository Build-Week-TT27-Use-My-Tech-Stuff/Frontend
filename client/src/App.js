import './App.css';
import RenterLogin from './components/renter-login';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import ItemList from './components/item-list';
import OwnerPostItem from './components/OwnerPostItemForm';
import Navbar from './components/navbar';
import OwnerLogin from './components/OwnerLogin';
import OwnerDashboard from './components/owner-dashboard';
import RenterBoard from './components/renter-board';
import OwnerBoard from './components/owner-board';
import OwnerPostItemConf from './components/OwnerPostItemConf';
import ItemCard from './components/item-card';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App"
      <Navbar/>
      <Route path='/owner-login'>
        <OwnerLogin/>
      </Route>

      <Route path='/signup'>
        <SignUp />
      </Route>

      <PrivateRoute path='/item-card' component={ItemCard} />
      <PrivateRoute path='/owner/item-dashboard' component={OwnerBoard} />
      <PrivateRoute path='/owner/dashboard' component={OwnerDashboard} />
      <PrivateRoute path='/owner/post-item-form' component={OwnerPostItem} />
      <PrivateRoute
        path='/owner/post-item-confirmation'
        component={OwnerPostItemConf}
      />
    </div>
  );
}

export default App;
