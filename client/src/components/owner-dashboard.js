import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const HomeDiv = styled.div`
background-color:#EEEEEE;

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
transition-duration: 0.4s;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
:hover{
  
  
  background: #80ED99;
  color: #C4C4C4;

}


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
transition-duration: 0.4s;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
:hover{
  
  
  background: #C4C4C4;
  color: #80ED99;

}
`





const OwnerDashbaord = () => {
  return (
<HomeDiv>

    <Div2>
    <h1>What would you like to do?</h1>
    </Div2>

    <Link to='/owner/item-dashboard'>
    <Button1>Check my items</Button1>
    </Link>

    <Link to='/owner/post-item-form'>

    <Button2>Post New Item +</Button2>
    </Link>
</HomeDiv>
  );
};
export default OwnerDashbaord;