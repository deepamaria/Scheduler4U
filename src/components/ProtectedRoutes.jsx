import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoutes({isuserLoggedIn,children}) {
 const navigate=useNavigate()
    return (
    <div>
        {isuserLoggedIn ? children : <button>Login</button>}
    </div>
  )
}

export default ProtectedRoutes