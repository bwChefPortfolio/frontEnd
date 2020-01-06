import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => (
    <div className='options'>
        <Link to='/'>Logo Placeholder</Link>
        <Link className='option' to='/profile'>Portfolio</Link>
        <Link className='option' to='/login'>Log In</Link>
        <Link className='option' to='/signup'>Sign Up</Link>
    </div>
)

export default Header;