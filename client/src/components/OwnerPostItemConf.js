import React, {useContext} from 'react';
import styled from 'styled-components';
import { ItemContext } from '../context/UserContext';

export default function OwnerPostItemConf() {
  
  
  const ItemValues= useContext(ItemContext)
console.log('do props work', ItemValues)

  return (
    <div>
    {ItemValues.map((item) => {
      return (
        <div>
          <TitleStyle1>
            <h1> Your Item has been posted! </h1>
          </TitleStyle1>
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
              <h2 className='pricingConf'>
                {item.price} per {item.time}
              </h2>
            </div>
          </ConfirmContainer>
          <ButtonStyle1>Edit Listing </ButtonStyle1>
          <ButtonStyle2>Delete Listing </ButtonStyle2>
        </div>
      );
    })
  }
  </div>
  );
}


const TitleStyle1 = styled.div`
  color: #353535;
  padding-top: 1.5rem;
  font-size: 1.2rem;
  padding-left: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Nova Mono', monospace;
  font-style: normal;
  font-weight: normal;
  margin: 3% auto;
`;
const ButtonStyle1 = styled.button`
  border-radius: 2rem;
  background-color: #80ed99;
  color: #353535;
  height: 2.3rem;
  width: 15rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 0% 0% 1% 0%;
`;
const ButtonStyle2 = styled.button`
  border-radius: 2rem;
  background-color: #c4c4c4;
  color: #ffffff;
  height: 2.3rem;
  width: 15rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 0% 0% 1% 0%;
`;

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  background: #ffffff;
  width: 900px;
  margin-bottom: 4%;

  h3 {
    font-size: 1.5rem;
  }

  h2 {
    font-size: 1rem;
    text-align: left;
  }

  #itemConf {
    width: 150px;
  }
  #descriptionConf {
    width: 500px;
  }
  #pricingConf {
    width: 150px;
  }
`;