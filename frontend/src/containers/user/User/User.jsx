import React from 'react'
import { follow, unfollow } from '../../../redux/actions/users';

const User = ({ user, myUser }) => {
    const isAlreadyFollowed = myUser?.following.includes(user._id);
    return (<div className="user">
        <img src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png" alt="" />
        <div className="userDatos">
            <span>{user.name}</span>
            <span>{user.email}</span>
            <span>Followers:{user.followers.length}</span>
            <span>Following:{user.following.length}</span>
        </div>
        <div className="botones"    >
            <button
            onClick={isAlreadyFollowed ? () =>unfollow(user._id): () => follow(user._id)}
            className={user._id === myUser._id ? 'primary hidden' : 'primary'}
            >{isAlreadyFollowed ? 'Unfollow':'Follow'}</button>
            {console.log(myUser.followers,user._id,myUser.followers.includes(user._id))}
            <p>{myUser.followers.includes(user._id) && 'Te sigue'}</p>
            
        </div>
    </div>
    )
}

export default User;