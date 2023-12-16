import React from 'react'

function LoginPage() {
  return (
    <div className='LoginPage flex h-full w-full'>
    <div className='Login h-full w-1/2'>
            <h1 className='text-2xl font-bold text-center'>Login to your Account</h1>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    </div>
        
        <div className='RightSideontainer h-full w-1/2'>
        <div className='RightSide h-full w-full flex flex-col items-center'>
                <h1 className='text-5xl font-bold'>Want to <span>Create, View</span> and <span>Schedule</span>your Activities in Calendar View</h1>
                    <br />
                <h1 className='text-5xl font-bold'>Login to <span>Organize Easily</span> with Scheduler4U</h1>
        </div>
        </div>
  </div>      
  )
}

export default LoginPage