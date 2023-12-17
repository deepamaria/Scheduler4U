import React from 'react'

function SignUpPage() {
  return (
    <div className='SignUpPage flex h-full w-full'>
        <div className='SignUp h-full w-1/3'>
            <h1 className='text-2xl font-bold text-center'>Create Your Account</h1>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">FullName</span>
          </label>
          <input type="text" placeholder="your Full Name" name='fullname' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password (Atleast 8 charachters)" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
        </div>
        </div>
        
       
    </div>
  )
}

export default SignUpPage