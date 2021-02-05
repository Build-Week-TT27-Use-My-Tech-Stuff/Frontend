import React from 'react';
import {Link} from 'react-router-dom'
import ItemCard from './item-card';
import Navbar from '../components/navbar'



const OwnerBoard = () => {
  const dummyData = ['','','','','', ''];
  return (
    <div>
    <Navbar/>
    <div className ='renter-board'>

      <div className = 'owner-post'>
        <Link>Post New Item +</Link>
      </div>
      <h3>Here are your items:</h3>
      <div className = 'renter-items'>
        {dummyData.map((x) => {return <ItemCard data = {x}/>})}
      </div> 
    </div>
    </div>
  );
};
export default OwnerBoard;