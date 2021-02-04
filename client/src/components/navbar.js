import React from 'react';
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
        </Div>
    </div>
  );
};
export default Navbar;