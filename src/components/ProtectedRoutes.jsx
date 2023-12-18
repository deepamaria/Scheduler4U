import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoutes({isuserLoggedIn,children}) {
 const navigate=useNavigate()
    return (
    <div>
        {isuserLoggedIn ? children : <button>You have to Login to view your applications.</button>}
    </div>
  )
}

export default ProtectedRoutes