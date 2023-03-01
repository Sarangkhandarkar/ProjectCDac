import logo from './logo.svg';
import './App.css';
import Navbar from './components/common-components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loginform from './components/Seperate-components/User/Loginform';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="container">
      <Switch>
        <Route path={"/userlogin"} component={Loginform} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
