import axios from 'axios';
import React from 'react';
import {useState, useEffect} from 'react'
import styled from 'styled-components'
const ItemPage = () => {
    const [item, setItem] = useState([]);
  useEffect(()=>{
    axios.get(`https://usemytechstuff.herokuapp.com/api/tech`)
        .then(res =>{
          console.log('item-page api data ', res.data);
          setItem(res.data);
          
        }).catch(err => console.log(err));
  },[])

  console.log('item-page name test ', item.name)  
  return (
    <div className ='item-page'>
      {item?.map((item) => (
        <div className = 'item-page-details'>
        <ConfirmContainer>
          <div>
            <h3 className='itemConf'>Item:</h3>
            <h2 className='itemConf'>{item.name}</h2>
          </div>
          <div>
            <h3 className='descriptionConf'>Description: </h3>
            <h2 className='descriptionConf'>{item.description}</h2>
          </div>
          <div>
              <h3 className='pricingConf'>Pricing: </h3>
              <h2 className='pricingConf'>{item.cost} per {item.time}</h2>
          </div>
        </ConfirmContainer>
          <ButtonStyle1>Edit Listing </ButtonStyle1>
          <ButtonStyle2>Delete Listing </ButtonStyle2>
      </div>))}
      
    </div>
  );
  
};
export default ItemPage;
const ButtonStyle1 = styled.button`
    border-radius: 2rem;
    background-color:#80ED99;
    color: #353535;
    height: 2.3rem;
    width: 15rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;  
    margin: 0% 0% 1% 0%;
`
const ButtonStyle2 = styled.button`
    border-radius: 2rem;
    background-color:#C4C4C4;
    color: #FFFFFF;
    height: 2.3rem;
    width: 15rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;  
    margin: 0% 0% 1% 0%;
`
const ConfirmContainer = styled.div`
display: flex;
justify-content:space-evenly;
background: #FFFFFF;
width: 900px;
margin-bottom: 4%;
h3{
    font-size: 1.5rem; 
}
h2{
    font-size: 1rem;
    text-align: left;
}
#itemConf{
    width: 150px;
}
#descriptionConf{
    width: 500px;
}
#pricingConf{
    width: 150px;
}`
