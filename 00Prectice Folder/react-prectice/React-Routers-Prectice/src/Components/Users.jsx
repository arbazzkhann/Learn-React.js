import React from 'react';

import { useParams } from 'react-router-dom'

const Users = () => {
    const user = useParams();

  return (
    <div>I am {user.user}</div>
  )
}

export default Users