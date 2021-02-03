import React from 'react';
import {Link} from 'react-router-dom'
import ItemCard from './item-card';
const OwnerBoard = () => {
  const dummyData = ['','','','','', ''];
  return (
    <div className ='renter-board'>
      <header className = 'header-renter-board'>
        <h1>Rent my Tech</h1>
        <h2>Welcome User</h2>
      </header>
      <div className = 'owner-post'>
        <Link>Post New Item +</Link>
      </div>
      <h3>Here are your items:</h3>
      <div className = 'renter-items'>
        {dummyData.map(() => {return <ItemCard/>})}
      </div> 
    </div>
  );
};
export default OwnerBoard;