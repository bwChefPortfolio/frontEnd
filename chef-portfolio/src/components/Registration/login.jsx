import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div className='registration'>
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input 
                name='username'
                type='text'
                placeholder='Username'
                />
                <input 
                name='password'
                type='password'
                placeholder='Password'
                />
                <button type='submit'>Log In</button>
                <Link className='link' to='/signup'>Don't have an account? Register here</Link>
            </form>
        </div>
    )
}

export default LogIn;