import React from 'react';
import { Link } from 'react-router-dom';
import './registration.scss';

const SignUp = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='registration'>
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input 
                name='firstName'
                type='text'
                placeholder='First Name'
                />
                <input 
                name='lastName'
                type='text'
                placeholder='Last Name'
                />
                <input 
                name='username'
                type='text'
                placeholder='Username'
                />
                <input 
                name='email'
                type='email'
                placeholder='Email'
                />
                <input 
                name='password'
                type='password'
                placeholder='Password'
                />
                <input 
                name='location'
                type='text'
                placeholder='Location'
                />
                <button type='submit'>Sign Up</button>
                <Link to='/login'>Already have an account? Log in here</Link>
            </form>
        </div>
    )
}

export default SignUp;