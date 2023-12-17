import Backendless from 'backendless';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProfilePage({setisuserLoggedIn,setevent2}) {

  const navigate=useNavigate();
  

  // code for validating user from backendless
  const userLoggedIn= Backendless.UserService.isValidLogin()
  .then( success )
  .catch( error );

  function success( result )
  { 
    console.log( "Is login valid?: " + result );
  } 
  
  function error( err ) 
  { 
    console.log( err.message );
    console.log( err.statusCode );
  } 
  
  // function for logging out from backendless

  function userLoggedOut()
  {
    console.log( "user has been logged out" );
    
    // clear the states of events of one user 
    setevent2(i=>[]);   
    // clear the isuserLoggedIn state to false
    setisuserLoggedIn(i=>(false));
    
    
    // console.log(event2);
    
    navigate("/");
  }
  
  function gotError( err ) // see more on error handling
  {
    console.log( "error message - " + err.message );
    console.log( "error code - " + err.statusCode );
  }

 function logoutHandler(){

  // code snippet for logout from Backendless
  Backendless.UserService.logout()
   .then( () => userLoggedOut() )
   .catch( gotError )
 }

  
  return (
    
      <div className='ProfilePage flex flex-col justify-center items-center gap-10'>
      
      <div className="logoutDiv grid place-items-end w-full">
             <button onClick={logoutHandler} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg logout_btn btn-cyan-600 bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50" >Logout</button>
      </div>

      <div className='imageContainer h-1/2 w-full bg-primary bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center '>
        <img className='imageDiv h-6/12 rounded-md  w-11/12' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX44OrTcOHRGM11JX6TA_X40TldFnzYcj8mQ&usqp=CAU' alt='HomePage_Img'></img>
      </div>


       <div className='diffAppsContainer h-1/2 w-full flex justify-center items-center gap-10'>
        <Link to={'/calendar'}>
           <button className='h-32 w-32 btn btn-cyan-600 bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50'>Calendar</button>
        </Link>

         <Link to={'/todos'}>
           <button className='h-32 w-32 btn btn-cyan-600 bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50'>Tasks/ Todos</button>
        </Link>
      </div>
    </div>
  )
}

export default ProfilePage