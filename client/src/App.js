import logo from './logo.svg';
import './App.css';
import OwnerLogin from './components/OwnerLogin'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path="/owner-login">
          <OwnerLogin />
      </Route>
    </div>
  );
}

export default App;
