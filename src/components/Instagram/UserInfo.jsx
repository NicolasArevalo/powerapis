import React from 'react'
import { useFetchData } from '../../hooks/ig/useFetchData'

const UserInfo = ({ username }) => {

    const { data, loading } = useFetchData( username )

  return (
    <div>
        <h1>userinfo</h1>
    </div>
  )
}

export default UserInfo