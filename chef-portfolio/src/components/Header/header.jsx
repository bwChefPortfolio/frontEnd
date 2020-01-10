import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import Logo from '../../images/chef-portlogo.png'

const Header = () => (
    <div className='header'>
        <Link className='logo' to='/'><img src={Logo} alt='chef portfolio logo'></img></Link>
        <div className='options'>
            {/* <Link className='option' to='https://bwchefportfolio7.netlify.com/'>Product</Link> */}
            {/* <Link className='option' to='#'>About Us</Link> */}
            <Link className='option' to='/chefdashboard'>Portfolio</Link>
            <Link className='option' to='/login'>Log In</Link>
            <Link className='option' to='/signup'>Sign Up</Link>
        </div>
    </div>
)

export default Header;