import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './recipe-form.scss';

const RecipeForm = ({ values, errors, touched, status }) => {
    // console.log("values", values);
    // console.log("errors", errors);
    // console.log("touched", touched);
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setRecipe(recipe => [...recipe, status]);
    }, [status]);

    return (
        <div className='recipe-container'>
            <img src='https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80' />
            <Form className='recipe-form'>
            
                <div className='labels'>
                    <label htmlFor='title'>Recipe Name: </label>
                    <label htmlFor='type'>Meal Type: </label>
                    <label htmlFor='ingredients'>Ingredients: </label>
                    <label htmlFor='recipe'>Recipe: </label>
                </div>
                <div className='fields'>
                    <div className='field'>
                        <Field className='title'
                        id='title'
                        name='title'
                        type='text'
                        />{touched.title && errors.title && (<p className='error'>{errors.title}</p>)}
                    </div>
                    <div className='field'>
                        <Field as='select' className='select' id='type' name='type'>
                        <option value='none' selected disabled hidden>Choose an option</option>
                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                        <option value='Dinner'>Dinner</option>
                        <option value='Snacks'>Snacks</option>
                        <option value='Dessert'>Dessert</option>
                        </Field>{touched.type && errors.type && (<p className='error'>{errors.type}</p>)}
                    </div>
                    <div className='field'>
                        
                        <Field className='ingredients'
                        id='ingredients'
                        name='ingredients'
                        type='text'
                        />{touched.ingredients && errors.ingredients && (<p className='error'>{errors.ingredients}</p>)}
                        </div>
                    <div className='field'>
                        
                        <Field className='recipe'
                        id='recipe'
                        name='recipe'
                        type='text'
                        />{touched.recipe && errors.recipe && (<p className='error'>{errors.recipe}</p>)}
                    </div>
                    <button type='submit'>Add Recipe</button>
                </div>
            </Form>
            {recipe.map(dish => {
                return(
                    <ul key={dish.id}>
                        <li>Title: {dish.title}</li>
                        <li>Meal Type: {dish.type}</li>
                        <li>Ingredients: {dish.ingredients}</li>
                        <li>Recipe: {dish.recipe}</li>
                    </ul>
                )
            })}
        </div>
    )
}

const FormikRecipeForm = withFormik({
    mapPropsToValues(props) {
        return {
            title: props.title || "",
            type: props.type,
            ingredients: props.ingredients || "",
            recipe: props.recipe || ""
        }
    },
    validationSchema: Yup.object().shape({
        title: Yup.string().required("*Please add a name to your dish"),
        type: Yup.string().oneOf(["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"]).required("*Please select a meal type"),
        ingredients: Yup.string().required("*Please add at least one ingredient"),
        recipe: Yup.string().required("*Please provide a recipe for your dish")
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log("submitting", values);
        axios
            .post("https://reqres.in/api/users/", values)
            .then(response => {
                console.log("success", response);
                setStatus(response.data);
                resetForm();
            })
            .catch(error => {
                console.log(error.response);
            })
    }
})(RecipeForm)

export default FormikRecipeForm;