import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddEventPage() {

  const navigate=useNavigate();

  return (
    <div>AddEventPage

div className="card w-full max-w-sm shadow-2xl bg-cyan-500">
      
      <form className="card-body">
      
      <div className="form-control">
          {/* <label className="label">
            <span className="label-text">FullName</span>
          </label> */}
          <input type="text" id='fullname' name='fullname' placeholder="FullName" className="input input-bordered" required />
        </div>

        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Email</span>
          </label> */}
          <input type="email" id='email' name='email' placeholder="Email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          {/* <label className="label">
            <span className="label-text">Password</span>
          </label> */}
          <input type="password" id='password' name='password' placeholder="Password" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button type='submit' className="btn btn-cyan-600 bg-cyan-600">SignUp</button>
        </div>
        
        <div className='hr flex'>
          <p>OR</p>
        </div>

        <Link to={"/login"}><div className='btn btn-cyan-600 btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-gradient-to-r from-cyan-500 shadow-2xl shadow-cyan-500/50'>Log In</div></Link>



      </form>
        </div>

    </div>
  )
}

export default AddEventPage