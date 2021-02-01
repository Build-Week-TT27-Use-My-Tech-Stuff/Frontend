import SignUp from './components/SignUp'
import React, { useState, useEffect } from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios';
import * as Yup from 'yup'
import SUschema from './validation/SUformSchema'


const initialSUFormValues = {
  username:'',
  password:'',
  pwconfirm: '',
  userType: '',
}

const initialSUFormErrors={
  username:'',
  password:'',
  pwconfirm: '',
  userType: '',
}

const initialDisabled = true;

function App() {
  const [users, setUsers]= useState([])
  const [formValues, setFormValues] = useState(initialSUFormValues)
  const [formErrors, setFormErrors] = useState(initialSUFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = (newUser) =>{
    axios.post('https://reqres.in/api/users', newUser)
    .then((resp)=>{
      setUsers([resp.data, ...users])
      setFormValues(initialSUFormValues)
    })
  }


  const handleChange= (name, value) => {
    
    Yup.reach(SUschema, name)
    .validate(value)
    .then(()=>{
        setFormErrors({...formErrors, [name]:''})
    })
    .catch((err)=>{
        setFormErrors({...formErrors, [name]:err.errors[0]})
    })

      setFormValues({...formValues, [name]:value})
  }

  const formSubmit = () => {
    const newUser={
    username: formValues.username.trim(),
    password: formValues.password.trim(),
    pwconfirm: formValues.password.trim(),
    userType: formValues.userType,
    }
    postNewUser(newUser)
  }

  useEffect(()=>{
    SUschema.isValid(formValues)
    .then((valid)=>{
      setDisabled(!valid);
    })
  },[formValues])


  return (
    <div className="App">
      
      <Route path='/signup'>
        <SignUp values={formValues} change={handleChange} submit={formSubmit} errors={formErrors} disabled={disabled}/>
      </Route>
    </div>
  );
}

export default App;
