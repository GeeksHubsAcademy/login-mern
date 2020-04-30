import React, { useEffect } from 'react'
import { getAllUsers } from '../../../redux/actions/users'
import { connect } from 'react-redux';
import './Users.scss'
import User from '../User/User';
const Users = props => {
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div className="usersContainer">
            {props.users?.map(user => <User key={user._id} user={user} myUser={props.myUser} />)}
        </div>
    )
}

const mapStateToProps = ({ user }) => ({ users: user.users, myUser: user.user });
export default connect(mapStateToProps)(Users);
