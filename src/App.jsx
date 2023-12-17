import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import StartingPage from './components/StartingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import MyCalendar from './components/MyCalendar';
import AddEventPage from './components/AddEventPage';
import ErrorPage from './components/ErrorPage';
import Backendless from 'backendless';


function App() {

// state for checking whether a userLoggedIn or not
const [isuserLoggedIn, setisuserLoggedIn] = useState(false)

  Backendless.serverURL = "https://eu-api.backendless.com";
  Backendless.initApp(
    process.env.REACT_APP_APP2ID,
    process.env.REACT_APP_API2KEY
  );

  return (
    <div className="App">
      <Nav/>
      <div className='MainContainer'>

      {/* God is Great */}

      <Routes>
        <Route path='/' element={<StartingPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LoginPage setisuserLoggedIn={setisuserLoggedIn}/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/calendar' element={<MyCalendar/>} />
        <Route path='/addevent' element={<AddEventPage/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes>
      
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
