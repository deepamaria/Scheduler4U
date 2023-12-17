import Backendless from 'backendless'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage({setisuserLoggedIn}) {

  const navigate=useNavigate();

  function userLoggedIn( user )
    {
        console.log(user);
        console.log( "user has logged in" );

        // userLoggedIn state updated to true 
        setisuserLoggedIn(i=>(true));
    }
    
    function gotError( err ) // see more on error handling
    {
        console.log( "error message - " + err.message );
        console.log( "error code - " + err.statusCode );
    }


    function loginHandler(e){
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
      
      Backendless.UserService.login( email,password, true )
      .then( userLoggedIn )
      .catch( gotError );
      
      navigate("/profile")
      }

  return (
    <div className='LoginPage flex h-full w-full'>
    <div className='Login h-full w-full'>
            <h1 className='text-2xl font-bold text-center'>Login to your Account</h1>
    <div className="card w-full max-w-sm shadow-2xl bg-cyan-600">
        <form onSubmit={loginHandler} className="card-body">
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Email</span>
          </label> */}
        <input type="email" name="email" id='email' placeholder="Email" className="input input-bordered" required />
          
        </div>
        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Password</span>
          </label> */}
                    
        <input type="password" name='password' id='password' placeholder="Password" className="input input-bordered" required />

          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-cyan-600">Login</button>
        </div>
      </form>
    </div>
    </div>
        
        {/* <div className='RightSideontainer h-full w-1/2'>
        <div className='RightSide h-full w-full flex flex-col items-center'>
                <h1 className='text-5xl font-bold'>Want to <span>Create, View</span> and <span>Schedule</span>your Activities in Calendar View</h1>
                    <br />
                <h1 className='text-5xl font-bold'>Login to <span>Organize Easily</span> with Scheduler4U</h1>
        </div>
        </div> */}
  </div>      
  )
}

export default LoginPage