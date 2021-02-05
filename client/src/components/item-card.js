import React from 'react';
import {useHistory} from 'react-router-dom'
const ItemCard = (props) => {
  const {data} = props;
  console.log('item-card data ', data)
  const history = useHistory();
    const printWork = () =>{
        console.log('click is working in item-card')
        history.push('/item-page');
    }
  return (
    <div className ='item-card' onClick = {printWork}>
        <div className = 'item-page-details'>
          <img src = {data.picture ? data.picture : 'https://previews.123rf.com/images/monuttanit/monuttanit1802/monuttanit180200001/95571225-404-high-tech-error-page-not-found-background-vector-graphic.jpg'}/>
          <p>Item Name: {data.name}</p>
          <p>Item Price: ${data.cost} a day</p>
      </div>
    </div>
  );
};
export default ItemCard;