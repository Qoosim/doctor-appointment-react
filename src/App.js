// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import DoctorsList from './components/DoctorsList/DoctorsList';
import Reserve from './components/Reserve/Reserve';
import MyReservation from './components/MyReservation/MyReservation';
import CarouselDisplay from './components/Carousel/Carousel';
import { data } from './components/Carousel/data';
import { doctors } from './components/DoctorsList/doctors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/doctors" element={ <DoctorsList slides={doctors} /> } />
        <Route path="/reserve" element={ <Reserve /> } />
        <Route path="/reservations" element={ <MyReservation /> } />
        <Route path="/display" element={ <CarouselDisplay slides={data} /> } />
      </Routes>
    </Router>
  );
}

export default App;
