import React from 'react';
import {useHistory} from 'react-router-dom'
const ItemCard = (props) => {
  const {name, img} = props.data;
  const history = useHistory();
    const printWork = () =>{
        console.log('click is working in item-card')
        console.log('item-card props: ',props)
        history.push('/item-page');
    }
  return (
    <div className ='item-card' onClick = {printWork}>
      <img src = {img}/>
      <p>Item name: {name}</p>
    </div>
  );
};
export default ItemCard;