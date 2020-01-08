import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo' to='/'>Logo Placeholder</Link>
        <div className='options'>
            <Link className='option' to='/profile'>Portfolio</Link>
            <Link className='option' to='/login'>Log In</Link>
            <Link className='option' to='/signup'>Sign Up</Link>
        </div>
    </div>
)

export default Header;