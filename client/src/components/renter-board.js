import React from 'react';
import ItemCard from './item-card';
const RenterBoard = () => {
  const dummyData = ['','','','','', ''];
  return (
    <div className ='renter-board'>
      <header className = 'header-renter-board'>
        <h1>Rent my Tech</h1>
        <h2>Welcome User</h2>
      </header>
      <h3>Here are some of the items that are available for Rent</h3>
      <div className = 'renter-items'>
        {dummyData.map(() => {return <ItemCard/>})}
      </div> 
    </div>
  );
};
export default RenterBoard;