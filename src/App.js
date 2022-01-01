import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from './pages/Admin';
import PollingClerk from './pages/PollingClerk';
import Voter from './pages/Voter';
import Login from './pages/Login';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Finger Print Voting System</h1>

      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/pollingclerk'element={<PollingClerk />} />
          <Route path='/voter' element={<Voter />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
