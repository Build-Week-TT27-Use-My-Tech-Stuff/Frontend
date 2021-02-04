import React from 'react';
import pic from '../imgs/pic01.jpg'
const ItemPage = (props) => {
    console.log('ItemPage props: ', props);
    const {data} = props;
    console.log('ItemPage data: ', data);
    const printWork = () =>{
        console.log('click is working in item-page')
    }
  return (
    <div className ='item-page'>
      <img src = {data.img}/>
      <div className = 'item-page-details'>
        <p>Item Category: {data.name}</p>
        <p>Item name: {data.category}</p>
        <p>Item Price: ${data.price} a day</p>
        <p>Item Description: {data.description}</p>
      </div>
      <span><button>Edit</button><button>Delete</button></span>
    </div>
  );
};
export default ItemPage;