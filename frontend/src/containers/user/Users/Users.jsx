import React, { useEffect } from 'react'
import { getAllUsers } from '../../../redux/actions'

const Users = () => {
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>

        </div>
    )
}

export default Users
