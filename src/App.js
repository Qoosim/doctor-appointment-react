import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DoctorsList from './components/DoctorsList/DoctorsList';
import Reserve from './components/Reserve/Reserve';
import MyReservation from './components/MyReservation/MyReservation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/doctors" element={ <DoctorsList /> } />
        <Route path="/reserve" element={ <Reserve /> } />
        <Route path="/reservations" element={ <MyReservation /> } />
      </Routes>
    </Router>
  );
}

export default App;
