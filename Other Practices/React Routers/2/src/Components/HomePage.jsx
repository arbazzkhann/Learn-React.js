import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <div>Hello this is home page.</div>
      <div>
        Go to : <Link to="/profiles">Profiles</Link>
      </div>
    </>
  )
}

export default HomePage