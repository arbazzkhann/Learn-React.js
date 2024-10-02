import React from 'react'
import { Link } from 'react-router-dom';

const ProfilesPage = () => { 
  const profiles = [1, 2, "Arbaz", "Manav", 3];
  return (
    <>
        <div>ProfilesPage</div>
            {profiles.map((profile) => {
                return <div key={profile} className='flex flex-col m-2'><Link to={`/profile/${profile}`}>{profile}</Link></div>
            })}

        <div>Go back to Home : <Link to="/">Click me!</Link></div>

    </>
  )
}

export default ProfilesPage