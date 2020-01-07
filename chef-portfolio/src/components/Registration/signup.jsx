import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './registration.scss';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = ({ values, errors, touched, status }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    

    return (
        <div className='registration'>
            <Form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <Field 
                name='firstName'
                type='text'
                placeholder='First Name'
                />{touched.firstName && errors.firstName && (<p>{errors.firstName}</p>)}
                <Field 
                name='lastName'
                type='text'
                placeholder='Last Name'
                />{touched.lastName && errors.lastName && (<p>{errors.lastName}</p>)}
                <Field 
                name='username'
                type='text'
                placeholder='Username'
                />{touched.username && errors.username && (<p>{errors.username}</p>)}
                <Field 
                name='email'
                type='email'
                placeholder='Email'
                />{touched.email && errors.email && (<p>{errors.email}</p>)}
                <Field 
                name='password'
                type='password'
                placeholder='Password'
                />{touched.password && errors.password && (<p>{errors.password}</p>)}
                <Field 
                name='location'
                type='text'
                placeholder='Location'
                />{touched.location && errors.location && (<p>{errors.location}</p>)}
                <button type='submit'>Sign Up</button>
                <Link style={{color:'white', textDecoration:'none'}} to='/login'>Already have an account? Log in here</Link>
            </Form>
        </div>
    )
}

const FormikSignUp = withFormik({
    mapPropsToValues({location}) {
        return {
            location: ""
        }
    },
    validationSchema: Yup.object().shape({
        firstName: Yup.string().required("Please enter your first name"),
        lastName: Yup.string().required("Please enter your last name"),
        username: Yup.string().required("Please enter your username"),
        email: Yup.string().email("Please provide a valid email address").required("Please enter your email address"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Please enter your password"),
        location: Yup.string().required("Please enter your location")
    }),

        handleSubmit = (values, {props, setStatus}) => {
        axios
        .post("https://build-week-how-to.herokuapp.com/api/auth/register", values)
        .then(res=> {
            setStatus(res.data);
            console.log(res.status);
            props.history.push('/login')
        })
        .catch(err => console.log(err.res))
    }

})(SignUp)

export default FormikSignUp;