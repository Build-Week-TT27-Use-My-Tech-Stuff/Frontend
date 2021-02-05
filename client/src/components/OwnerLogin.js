import React, { useState } from 'react';
import OwnerLoginForm from './OwnerLoginForm';
import styled from 'styled-components';


const Card = styled.section`
  background-color: #163245;
  color: white;
  border-radius: 1rem;
  padding: 3rem;
  margin-left: 25rem;
  margin-right: 25rem;
  font-family: 'Nova Mono', monospace;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const H1 = styled.h1`
  font-size: 3rem;
  font-family: 'Nova Mono', monospace;
  margin-top:5rem;
`;
const H3 = styled.h3`
  font-family: 'Nova Square', monospace;
  text-decoration: none;
  margin: auto;
  padding-left: 25rem;
  margin-left: 25rem;
  margin-bottom: 7rem;
`;
function OwnerLogin() {
  const [formvalues, setFormvalues] = useState({
    username: '',
    password: '',
  });

  // useEffect(() => {
  //   axios.post(baseURL/, formvalues)
  //       .then((response) =>{
  //         console.log(response);
  //       }, (error) => {
  //         console.log(error);
  //       }
  //       )},[]);

  return (
    <div className='App'>


      ​<H1>Rent my Tech</H1>
      <Card>
        <H1>Owner Login</H1>
        <OwnerLoginForm setFormvalues={setFormvalues} formvalues={formvalues} />
      </Card>
    </div>
  );
}

export default OwnerLogin;
