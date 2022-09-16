import React from 'react'
import { Navigate } from 'react-router-dom'


const Protect = ({isLogin, children}) => {
    if (!isLogin) {
       return <Navigate to='/' replace />;
    }
  return children;
}

export default Protect