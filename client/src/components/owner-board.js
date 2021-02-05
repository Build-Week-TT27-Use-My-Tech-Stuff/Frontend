import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import ItemCard from './item-card';

const OwnerBoard = () => {
  const dummyData = ['','','','','', ''];
  const history = useHistory();
    const postItem = () =>{
        history.push('/owner/post-item-form');
    }
  return (
    <div className ='renter-board'>

      <div className = 'owner-post'>
        <Link onClick = {postItem}>Post New Item +</Link>
      </div>
      <h3>Here are your items:</h3>
      <div className = 'renter-items'>
        {dummyData.map((x) => {return <ItemCard data = {x}/>})}
      </div> 
    </div>
  );
};
export default OwnerBoard;