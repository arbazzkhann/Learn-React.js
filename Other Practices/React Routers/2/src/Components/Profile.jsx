import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Profile = () => {
  const profile = useParams();

  return (
      <>
        <div>Profile: {profile.profileId}</div>
        <div>Go back to Profiles : <Link to="/profiles">Click me!</Link></div>
        <div>Go back to Home : <Link to="/">Click me!</Link></div>
      </>

  )
}

export default Profile