import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.scss';
const Header = props => {
    return <header className="header">
        <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>

        {props.user ?
            <div className="userZone">
                <NavLink to='/profile' activeClassName="isActive" exact>{props.user.name}</NavLink>
                <span >Logout</span>
            </div> : <div className="guestZone">
                <NavLink to='/login' activeClassName="isActive" exact>Login</NavLink>
                <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
            </div>}
    </header>
}
const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(Header);