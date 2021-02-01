import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function SignUp(props) {
    const {values, change, submit, errors, disabled} = props
    
    const onChange= (evt) => {
        const { name, value } = evt.target;
        change(name, value);
    }

    const onSubmit=(evt)=>{
        evt.preventDefault();
        submit();
    }

    return (
        <PageContainer >
            <TitleStyle>
                <h1> Rent my Tech</h1>
            </TitleStyle>
            <SignUpContainer>
            <div>
                <h1>Sign Up</h1>
            <Form onSubmit={onSubmit}>
                <Label>
                    <input placeholder='username' name="username" type='text' value={values.username} onChange={onChange} className= 'input-box'></input>
                </Label>
                <Label>
                    <input placeholder='password' name='password' type='password' value={values.password} onChange={onChange} className= 'input-box'></input>
                </Label>
                <Label>
                    <input placeholder='password' name='pwconfirm' type='password' value={values.pwconfirm} onChange={onChange} className= 'input-box'></input>
                </Label>
                <RadBtns className='radioBtns'>
                <Label>
                    <input name='userType' type='radio' value='renter' checked={values.userType === 'renter'} onChange={onChange} className= 'input-box'></input>
                    I want to rent someone else's stuff
                </Label>
                <Label>
                    <input name='userType' type='radio' value='owner' checked={values.userType === 'owner'} onChange={onChange} className= 'input-box'></input>
                    I want to rent my stuff to someone else
                </Label>
                </RadBtns>
                <div className='formErrors'>
                    <p>{errors.username}</p>
                    <p>{errors.password}</p>
                    <p>{errors.pwconfirm}</p>
                    <p>{errors.userType}</p>
                </div>
                <ButtonStyle disabled={disabled}> Sign Up </ButtonStyle>
                <Links>
                    <span>Already have an account? </span> 
                    <Link to="/login" className="loginLink" >Login</Link>
                </Links>
            </Form>
          </div>
        </SignUpContainer>
        </PageContainer >
    )
}



const PageContainer = styled.div`
    border: solid 3px purple;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;`

const TitleStyle = styled.div`
    color: #353535;
    padding-top: 1.5rem;
    font-size: 1.2rem;
    padding-left: 2rem; 
    width:100%;
    display:flex; 
    justify-content: center;
`

const SignUpContainer= styled.div`
    border: 2px solid yellow;
    width: 60%;
    background-color: #0C2A3E;
    display:flex;
    justify-content: center;
    padding: 3% 3% 6% 3%;
    text-align: center;
    box-shadow: 0px 30px 60px -40px rgba(31, 38, 23, 0.5);
    border-radius: 10px;
    color: #FFFFFF;
    `

const ButtonStyle = styled.button`
    border-radius: 2rem;
    background-color:#80ED99;
    color: #353535;
    height: 2.2rem;
    width: 26rem;
    border: none;
    cursor: pointer;
    font-size: 1rem;  
    margin: 0% 0% 1% 0%;
`
const Form = styled.form`
    display:flex;
    justify-content:center;
    flex-direction: column;
    border: 1px solid yellow;
`
const Label = styled.label`
    padding: 1%;
    margin: 0% 0% 4% 0%;
`
const Links = styled.div`
  color: #FFFFFF;
  text-align: right; 
`
const RadBtns = styled.div`
border: 1px solid red;
width: 30%;
display: flex;
justify-content:center;
flex-wrap: wrap;
`
