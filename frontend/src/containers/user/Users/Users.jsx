import React, { useEffect } from 'react'
import { getAllUsers } from '../../../redux/actions'
import {connect} from 'react-redux'
const Users = () => {
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>

        </div>
    )
}
const mapStateToProps = (state) => ({users:state.users});
export default connect(mapStateToProps) (Users);
