import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
const Header = props => {
    return <header className="header">
        <NavLink to='/' activeClassName="isActive" exact>Home</NavLink>
        <NavLink to='/login' activeClassName="isActive" exact>Login</NavLink>
        <NavLink to='/register' activeClassName="isActive" exact>Register</NavLink>
    </header>
}
export default Header;