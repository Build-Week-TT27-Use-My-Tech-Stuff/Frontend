import React from 'react';
import pic from '../imgs/pic01.jpg'
const ItemCard = () => {
  
    const printWork = () =>{
        console.log('click is working in item-card')
    }
  return (
    <div className ='item-card' onClick = {printWork}>
      <div>
        <img src = {pic}/>
        <p>Item name</p>
        <p>Price: </p>
        <p>Available</p>
      </div> 
      
    </div>
  );
};
export default ItemCard;