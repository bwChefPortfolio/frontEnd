import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LogIn = ({ values, errors, touched, status }) => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div className='registration'>
            <Form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <Field 
                name='username'
                type='text'
                placeholder='Username'
                />{touched.username && errors.username && (<p>{errors.username}</p>)}
                <Field 
                name='password'
                type='password'
                placeholder='Password'
                />{touched.password && errors.password && (<p>{errors.password}</p>)}
                <button type='submit'>Log In</button>
                <Link style={{color:'white', textDecoration:'none'}} className='link' to='/signup'>Don't have an account? Register here</Link>
            </Form>
        </div>
    )
}

const FormikLogIn = withFormik({
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Please enter your username"),
        password: Yup.string().required("Please enter your password")
    })
})(LogIn)

export default FormikLogIn;