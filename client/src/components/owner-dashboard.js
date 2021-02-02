import React from 'react';
import styled from 'styled-components'

const HomeDiv = styled.div`
background-color:white;

`


const Div = styled.div`
display: flex;
justify-content: space-between;
background:#163245;
color:white;
font-family: 'Nova Mono', monospace;
padding-left: 3rem;
padding-right: 3rem;

`
const Div2 = styled.div`
padding-top:18rem;
font-family: 'Nova Mono', monospace;


`

const Button1 = styled.button`
background: #C4C4C4;
border:none;
padding:0.5rem;
border-radius:2rem;
width:17%;
font-family: 'Nova Square', monospace;
margin-right:2rem;
color:white;
margin-top:2rem;
cursor:pointer;

`

const Button2 = styled.button`
background: #80ED99;
border:none;
padding:0.5rem;
border-radius:2rem;
width:17%;
font-family: 'Nova Square', monospace;
margin-left:2rem;
margin-top:2rem;
cursor:pointer;

`





const OwnerDashbaord = () => {
  return (
<HomeDiv>
    <Div >
        <h2>Rent my Tech</h2>
        <h2>Welcome,User!</h2>
    </Div>

    <Div2>
    <h1>What would you like to do?</h1>
    </Div2>
    <Button1>Check my items</Button1>
    
    <Button2>Post New Item +</Button2>
</HomeDiv>
  );
};
export default OwnerDashbaord;