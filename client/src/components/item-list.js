import React from 'react';
import ItemCard from './item-card'
const ItemList = () => {
    const printWork = () =>{
        console.log('click is working in item-list')
    }
  return (
    <div className ='item-list' onClick = {printWork}>
      <div className = 'sidebar'>
        <ItemCard/>
      </div>
    </div>
  );
};
export default ItemList;