import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
        <div>404 Not Found</div>
        <Link to='/'><div>Click me to go back to Home</div></Link>
    </>
  )
}

export default ErrorPage