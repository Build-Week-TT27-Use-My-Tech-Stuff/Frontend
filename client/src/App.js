import './App.css';
import pic1 from './imgs/pic01.jpg'
import pic2 from './imgs/pic02.jpg'
import pic3 from './imgs/pic03.jpg'
import pic4 from './imgs/pic04.jpg'
import pic5 from './imgs/pic05.jpg'
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
import ItemPage from './components/item-page'

function App() {
  const dummyData = [{
    id: 0,
    name: 'Logitech G60 Speakers',
    description: 'Speakers with amps and bass and stuff and extra good sounds ya hear',
    category: 'Audio',
    price: 20,
    img: pic1,
    availability: true
  },
  {
    id: 1,
    name: 'Keyboard',
    description: 'Speakers with amps and bass and stuff and extra good sounds ya hear',
    category: 'Audio',
    price: 20,
    img: pic2,
    availability: true
  },
  {
    id: 2,
    name: 'Tv',
    description: 'Speakers with amps and bass and stuff and extra good sounds ya hear',
    category: 'Audio',
    price: 20,
    img: pic3,
    availability: false
  },
  {
    id: 3,
    name: 'N64',
    description: 'Speakers with amps and bass and stuff and extra good sounds ya hear',
    category: 'Audio',
    price: 20,
    img: pic2,
    availability: true
  },
  {
    id: 4,
    name: 'Logitech G60 Speakers',
    description: 'Speakers with amps and bass and stuff and extra good sounds ya hear',
    category: 'Audio',
    price: 20,
    img: pic3,
    availability: false
  },
  {
    id: 5,
    name: 'Logitech G60 Speakers',
    description: 'Speakers with amps and bass and stuff and extra good sounds ya hear',
    category: 'Audio',
    price: 20,
    img: pic1,
    availability: true
  },
]
  return (
    <div className='App'>
      <Navbar />
      <Route path='/login'>
        <OwnerLogin />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path = '/item-page'>
        <ItemPage data = {dummyData[1]}/>
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
