import React, { useState } from 'react';
import OwnerLoginForm from './OwnerLoginForm'
import styled from 'styled-components'


const Card = styled.section`
background-color:#163245;
color:white;
border-radius:1rem;
padding:5rem;
`

function OwnerLogin() {
    const [formvalues, setFormvalues] = useState({username:"",
password:""})
    return (
      <div className="App">
        <h3>Are you a renter?</h3>

        <h1>Rent my Tech</h1>

        <Card>
        <h1>Owner Login</h1>
        <OwnerLoginForm 
        setFormvalues={setFormvalues}
        formvalues={formvalues}
        />

        </Card>


      </div>
    );
  }
  
  export default OwnerLogin;
  