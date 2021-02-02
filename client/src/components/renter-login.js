import React from "react";
import SignUp from './sign-up-test'
import OwnerLogin from './owner-login-test'
import {Link, Route, Switch} from 'react-router-dom'
import {useForm} from 'react-hook-form'
const RenterLogin = () => {
    // const { values, submit, change, disabled, errors } = props;
    // console.log(values)
    // const onSubmit = event => {
    //     event.preventDefault();
    //     submit();
    // }

    // const onChange = event => {
    //     const { name, value, type, checked } = event.target;

    //     change( name, type === 'checkbox' ? checked : value );
    // }
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        
        console.log(data);
    } 
    return (
        <div className ='renter-div'>
            <div className = 'nav-link'>
                <Link to = '/ownerlogin'>Are you an owner?</Link>
            </div>
            <h1>Rent my Tech</h1>
            <div className = 'renter-login' >
        
            <form className = 'renter-input' onSubmit = {handleSubmit(onSubmit)}>
                <h2>Renter Login</h2>
                <input type = 'text'
                    name = 'username'
                    placeholder = 'username'
                    ref = {register}/>
                    <br/>
                <input type = 'text'
                    name = 'password'
                    placeholder = 'password'
                    ref={register({required: true, minLength: 8})}/>
                    <br/>
                <span>{errors.password && <p>Password is invalid</p>}</span>
                <input type = 'submit' className='login-btn' value = 'login'/>
                <br/>
            
                <span className = 'sign-up'>Not yet a member? | <Link to = '/signup'>Sign up</Link></span>
            </form>
        </div>
        <Switch>
            <Route path = {'/ownerlogin'}>
                <OwnerLogin/>
            </Route>
            <Route path = {'/signup'}>
                <SignUp/>
            </Route>
            <Route path = {'/'} component = {RenterLogin}/>
        </Switch>
      </div>
  );
};

export default RenterLogin;