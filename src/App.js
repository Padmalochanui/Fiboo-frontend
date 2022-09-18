
import './App.css';
import { BrowserRouter as Router,Routes ,  Route } from "react-router-dom";
import Mainpage from './components/Mainpage';
import Signup from './components/Signup'
import Login from './components/Login'
import Fibonacci from './components/Fibonacci';


function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path='/' exact element={<Mainpage />} />
          <Route path='/signup' exact element={<Signup/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/Fibonacci' exact element={<Fibonacci/>} />
    </Routes> 
    </Router>   
    </>
  );
}

export default App;
