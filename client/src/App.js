import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp'
import React, {useState} from 'react'
import {Route} from 'react-router-dom'



const initialSUFormValues = {
  username:'',
  password:'',
  pwconfirm: '',
  userType: '',
}

function App() {

  const [formValues, setFormValues] = useState(initialSUFormValues)

  const handleChange= (name, values) => {
      setFormValues({...formValues, [name]:values})
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
        <SignUp values={formValues} change={handleChange}/>
      </Route>
      
      
    </div>
  );
}

export default App;
