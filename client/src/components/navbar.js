import React, { useEffect } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';








const Div = styled.div`
display: flex;
justify-content: space-between;
background:#163245;
color:white;
font-family: 'Nova Mono', monospace;
padding-left: 3rem;
padding-right: 3rem;
textDecoration: 'none';
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`
const Button2 = styled.button`
background: #80ED99;
border:none;
border-radius:2rem;
font-family: 'Nova Square', monospace;
cursor:pointer;
transition-duration: 0.4s;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
width:10rem;
margin-top:0.3rem;
:hover{
  
  
  background: #C4C4C4;
  color: #80ED99;

}
`

const Navbar = () => {
    

    const printWork = () =>{
        console.log('click is working in item-card')
    }
  return (
    <div className ='navbar' onClick = {printWork}>
        <Div>
        <Link to='/owner/dashboard' style={{ textDecoration: 'none', color: 'white' }}>
        <h2>Rent my Tech</h2>
        </Link>
        <h2>Welcome, User!</h2>
        <Link to='/'>
        <Button2>Log out</Button2>
        </Link>
        </Div>
    </div>
  );
};
export default Navbar;