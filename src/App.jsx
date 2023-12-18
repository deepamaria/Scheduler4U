import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import StartingPage from './components/StartingPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import MyCalendar from './components/MyCalendar';
import Todos from './components/Todos';
import AddEventPage from './components/AddEventPage';
import ErrorPage from './components/ErrorPage';
import Backendless from 'backendless';
import ViewEventsPage from './components/ViewEventsPage';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {

// state for checking whether a userLoggedIn or not
const [isuserLoggedIn, setisuserLoggedIn] = useState(false)

const [event2, setevent2] = useState([{
  id: Math.floor(Math.random() * 10000),
  title: "Event 3",
  start: "2023-12-28",
  end: "2023-12-31",
},]);

  Backendless.serverURL = "https://eu-api.backendless.com";
  Backendless.initApp(
    process.env.REACT_APP_APP2ID,
    process.env.REACT_APP_API2KEY
  );

  // useeffect for states change in calendar
  useEffect(() => {
    Backendless.Data.of("Event")
      .find()
      .then((res) => {
                          console.log(res);
        setevent2(res);
      })
      .catch(
        (err) =>
         console.log(err) 
                          );
  }, [isuserLoggedIn]);

  return (
    <div className="App">
      <Nav/>
      <div className='MainContainer'>

      {/* God is Great */}
      <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          <Route
            path="/login"
            element={<LoginPage setisuserLoggedIn={setisuserLoggedIn} />}
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoutes isuserLoggedIn={isuserLoggedIn} setisuserLoggedIn={setisuserLoggedIn} setevent2={setevent2}>
                {" "}
                <ProfilePage isuserLoggedIn={isuserLoggedIn} setisuserLoggedIn={setisuserLoggedIn} setevent2={setevent2}/>{" "}
              </ProtectedRoutes>
            }
          />

          <Route path="/todos" element={<ProtectedRoutes isuserLoggedIn={isuserLoggedIn}>
            <Todos />
            </ProtectedRoutes>} />
 
          <Route
            path="/calendar"
            element={
              <ProtectedRoutes isuserLoggedIn={isuserLoggedIn}>
              <MyCalendar
                  event2={event2}
                />
                </ProtectedRoutes>
            }
          />
  
          <Route
            path="addevent"
            element={
              <ProtectedRoutes isuserLoggedIn={isuserLoggedIn}> 
              <AddEventPage
                 setevent2={setevent2}
              />
              </ProtectedRoutes>}
          />
          <Route
            path="viewevents" 
            element={
              <ProtectedRoutes isuserLoggedIn={isuserLoggedIn} setevent2={setevent2} event2={event2}>

              <ViewEventsPage
                event2={event2}
                setevent2={setevent2}
                />
                </ProtectedRoutes>
            }
          />

          <Route path="/*" element={<ErrorPage/>} />
        </Routes>

      {/* <Routes>
        <Route path='/' element={<StartingPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/login' element={<LoginPage setisuserLoggedIn={setisuserLoggedIn}/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/calendar' element={<MyCalendar/>} />
        <Route path='/todos' element={<Todos/>}/>
        <Route path='/addevent' element={<AddEventPage/>} />
        <Route path='/*' element={<ErrorPage/>} />
      </Routes> */}
      
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
