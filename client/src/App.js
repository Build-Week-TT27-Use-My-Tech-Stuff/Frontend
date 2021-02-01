import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import axios from 'axios';



const initialSUFormValues = {
  username:'',
  password:'',
  pwconfirm: '',
  userType: '',
}

function App() {
  const [users, setUsers]= useState([])
  const [formValues, setFormValues] = useState(initialSUFormValues)


  const postNewUser = (newUser) =>{
    axios.post('https://reqres.in/api/users', newUser)
    .then((resp)=>{
      setUsers([resp.data, ...users])
      setFormValues(initialSUFormValues)
    })
  }
  const handleChange= (name, values) => {
      setFormValues({...formValues, [name]:values})
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


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Route path='/signup'>
        <SignUp values={formValues} change={handleChange} submit={formSubmit} users={users}/>
      </Route>
    </div>
  );
}

export default App;
