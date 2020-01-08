import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
const LogIn = ({ values, errors, touched, status }, props) => {
    const [LogForm, setLogForm] = useState([]);
    useEffect(() => {
        status && setLogForm(LogForm =>
            [...LogForm, status]);
    }, [status]);
    return(
        <div className='registration'>
            <Form className='login'>
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
    mapPropsToValues({ username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Please enter your username"),
        password: Yup.string().required("Please enter your password")
    }),
    handleSubmit(values, { props, setStatus }) {
        axios
            .post("https://chef-portfolio-backend.herokuapp.com/auth/login", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.user_id);
                props.history.push(`/chefs/${values.username}`)
            })
            .catch(err => console.log(err.response));
    }
})(LogIn)
export default FormikLogIn;
/*const LogIn = ({ values, errors, touched, status }) => {
    const handleSubmit = event => {
       event.preventDefault();
    }
const LogIn = ({values, errors, touched, status}, props) => {
    const [credentials, setCredentials] = useState({
      username: 'Lambda School',
      password: 'i<3Lambd4'
   });
  
    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      })
    }
    const handleSubmit = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/auth/login', credentials)
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          props.history.push('/Portfolio')
          })
        .catch(err=> console.log(err))
    }
    handleSubmit(values, {props, setStatus}) {
        axios
        .post("https://chef-portfolio-backend.herokuapp.com/auth/register", values)
        .then(res=> {
            setStatus(res.data);
            console.log(res.status);
            props.history.push('/auth/login')
        })
        .catch(err => console.log(err.res))
*/