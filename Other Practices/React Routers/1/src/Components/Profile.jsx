import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const params = useParams()

  return (
    <>
      <div className='flex flex-col gap-2 m-4'>
        <h1>Profile Page</h1>
        <h2>Profile Name: {params.profileId}</h2>
      </div>
    </>
  )
}

export default Profile