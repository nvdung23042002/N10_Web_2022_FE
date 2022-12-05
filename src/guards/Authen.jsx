import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Authentication = ({ children }) => {
    const token = JSON.parse(localStorage.getItem('token'))
    const location = useLocation()
    if (!token) {
        return <Navigate to={'/login'} state={{ from: location }} />
    }

    return children
}

export default Authentication
