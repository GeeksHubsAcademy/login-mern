import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
const Header = props => {
    return <header className="header">
    <NavLink to='/' exact>Home</NavLink>
        <NavLink to='/users' exact>Users</NavLink>

        {props.pedro ?
            <div className="userZone">
                <NavLink to='/profile' exact>{props.pedro.name}</NavLink>
                <span >Logout</span>
            </div> : <div className="guestZone">
                <NavLink to='/login' exact>Login</NavLink>
                <NavLink to='/register' exact>Register</NavLink>
            </div>}
    </header>
}
const mapStateToProps = (state) => ({ pedro: state.user });
export default connect(mapStateToProps)(Header);