import styled from 'styled-components';
import React from 'react';
import {Link} from 'react-router-dom';

const Form = styled.form`
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const Input = styled.input`
padding:1rem;
margin:1rem;
width:50%;
`

const Inputlogin = styled.input`
background:#80ED99;
border-radius:1rem;
padding:1rem;
border:none;
width:50%;
cursor:pointer;
font-family: 'Nova Square', monospace;
font-size: 1rem;
`
const Span = styled.span`
color:#80ED99;
font-family: 'Nova Square', monospace;
font-size:1rem;
`

function OwnerLoginForm(props) {
  const { setFormvalues, formvalues } = props

  const onChange = (event) => {
    setFormvalues({...formvalues, [event.target.name]: event.target.value})  
  }
  
  const onSubmit = (event) =>{
    event.preventDefault();
    console.log("It works")
    console.log(formvalues)
  }

    return (
      <div className="App">
        
        <Form onSubmit={onSubmit}>
          <Input 
          type="text" 
          name="username" 
          placeholder="username"
          onChange = {onChange}
          />
​
          <Input 
          type="password" 
          name="password" 
          placeholder="password"
          onChange = {onChange}
          />
​
          <Inputlogin 
          type="submit" 
          value="login" 
          
          />
        </Form>
        <h5>Not yet a member?  | <Link to ='/signup'><Span>  Sign Up</Span></Link> </h5> 
      </div>
    );
  }
  
  export default OwnerLoginForm;
  