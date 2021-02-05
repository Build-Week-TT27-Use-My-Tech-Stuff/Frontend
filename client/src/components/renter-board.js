import React from 'react';
import ItemCard from './item-card';
const RenterBoard = (props) => {
  const {data} = props;
  console.log('renter-board ',data)
  return (
    <div className ='renter-board'>
      <h3>Here are some of the items that are available for Rent</h3>
      <div className = 'renter-items'>
        {data.map((x) => {return <ItemCard data = {x}/>})}
      </div> 
    </div>
  );
};
export default RenterBoard;