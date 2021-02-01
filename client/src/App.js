import {Route} from 'react-router-dom'
import SignUp from './components/SignUp'


function App() {
  

  return (
    <div className="App">
      
      <Route path='/signup'>
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
