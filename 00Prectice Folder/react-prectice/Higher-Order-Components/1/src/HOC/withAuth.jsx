import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const withAuth = (WrappedComponent) => {
  return function (props) {
    const navigate = useNavigate();
    const isAuth = false;

    useEffect(() => {
        console.log("User Authentication: ", isAuth)
        if(!isAuth) navigate('/')
    }, [isAuth, navigate]);
    
    return isAuth ? <WrappedComponent {...props}/> : <div>Null</div>
  }
}

export default withAuth