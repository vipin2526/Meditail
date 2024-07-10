import "./App.css"
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Treatments from './components/Treatments';
import Services from './components/Services';
import Hospital from './components/Hospital';
import Header from './components/Header';
import Login from './components/Login';
import Registration from './components/Registration';
import Profile from './components/Profile';


function App() {
  document.title = 'MEDITAIL';
  return (
    <div className="App">
      <Router >
        <Header />
        <div className='margin'>
        <Routes >
          <Route path='/' element={<LandingPage />} />
          <Route path='/treatments' element={<Treatments />} />
          <Route path='/hospital' element={<Hospital />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/profile' element={<Profile />} />
        </Routes></div>
 
      </Router>   
    </div>
  );
}

export default App;