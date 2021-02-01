import React from 'react'

export default function SignUp(props) {
    const {values, change} = props
    
    const onChange= (evt) => {
        const { name, value } = evt.target
        change(name, value)
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <label>
                    <input placeholder='username' name="username" type='text' value={values.username} onChange={onChange}></input>
                </label>
                <label>
                    <input placeholder='password' name='password' type='password' value={values.password} onChange={onChange}></input>
                </label>
                <label>
                    <input placeholder='password' name='pwconfirm' type='password' value={values.pwconfirm} onChange={onChange}></input>
                </label>
                <label>
                    <input name='userType' type='radio' value='renter' checked={values.userType === 'renter'} onChange={onChange}></input>
                    I want to rent someone else's stuff
                </label>
                <label>
                    <input name='userType' type='radio' value='owner' checked={values.userType === 'owner'} onChange={onChange}></input>
                    I want to rent my stuff to someone else
                </label>
                <button> Sign Up </button>
                
            </form>
        </div>
    )
}
