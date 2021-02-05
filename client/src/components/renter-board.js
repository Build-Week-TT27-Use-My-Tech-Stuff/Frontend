import React, {useState, useEffect} from 'react';
import axios from 'axios'
import ItemCard from './item-card';
const RenterBoard = () => {
  const [item, setItem] = useState([]);
  useEffect( ()=>{
    axios.get(`https://usemytechstuff.herokuapp.com/api/tech/`)
        .then(res =>{
          console.log('item-list api data ', res.data);
          setItem(res.data);
          
        }).catch(err => console.log(err));
    console.log('item-list page reloaded');
  },[])
  console.log('renter-board data ', item)
  return (
    <div className ='renter-board'>
      <h3>Here are some of the items that are available for Rent</h3>
      <div className = 'renter-items'>
        {item.map((x) => {return <ItemCard data = {x}/>})}
      </div> 
    </div>
  );
};
export default RenterBoard;