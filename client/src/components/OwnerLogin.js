import React, { useState } from 'react'
import OwnerLoginForm from './OwnerLoginForm'
import styled from 'styled-components'
import {Link} from 'react-router-dom';

const Card = styled.section`
background-color:#163245;
color:white;
border-radius:1rem;
padding:3rem;
margin-left:25rem;
margin-right:25rem;
font-family: 'Nova Mono', monospace;
`

const H1 = styled.h1`
font-size:3rem;
font-family: 'Nova Mono', monospace;
`
const H3 = styled.h3`
font-family: 'Nova Square', monospace;
text-decoration: none;
margin:auto;
padding-left:25rem;
margin-left:25rem;
margin-bottom: 7rem;
`
function OwnerLogin() {
    const [formvalues, setFormvalues] = useState({
        username:"",
        password:""
        })


    return (
      <div className="App">
        <Link to ="/renter-login">
        <H3>Are you a renter?</H3>
        </Link>
​
        <H1 >Rent my Tech</H1>
​
        <Card>
        <H1>Owner Login</H1>
        <OwnerLoginForm 
        setFormvalues={setFormvalues}
        formvalues={formvalues}
        />
        </Card>
      </div>
    );
  }
  
  export default OwnerLogin;
