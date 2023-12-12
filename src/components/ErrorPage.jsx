import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div className='ErrorPage'>
        <div className="hero h-full bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h1 className="text-5xl font-bold">OOPLAAA!!! </h1>
                    <h1 className="text-3xl font-bold">Error:404 File Not Found!!!</h1>
                        <p className="py-6"></p>
                
                <Link to={"/profile"}>
                <button className="btn btn-primary">Back to Profile Page</button>
                </Link>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage