import React from 'react'
import { Link } from 'react-router-dom';

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <>
        <div className='flex flex-col gap-2 m-4 text-3xl'>

            {profiles.map((profile) => {
                return (
                <Link key={profile} to={`/profiles/${profile}`}>
                    Profile: {profile}
                </Link>
                )
            })}

        </div>
    </>
  )
}

export default ProfilesPage