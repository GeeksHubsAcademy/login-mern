import React from 'react'
import { connect } from 'react-redux'
import './Profile.scss';
const Profile = ({ user }) => {
    return (
        <div className="profileContainer">
            {user && <React.Fragment>
                <div className="userHeader">
                    
                <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" alt="" />

                <div className="userData">
                    <span>{user.name}</span>
                </div>
                
                </div>
                <div className="comments">
                </div>
            </React.Fragment>}
        </div>
    )
}
const mapStateToProps = state => ({ user: state.user });
export default connect(mapStateToProps)(Profile);