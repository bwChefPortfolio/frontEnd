import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './recipe-form.scss';

const RecipeForm = ({ values, errors, touched, status }) => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className='recipe-container'>
            <img />
            <Form className='recipe-form' onSubmit={handleSubmit}>
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
                        <select className='select' id='type'>
                        <option>Breakfast</option>
                        <option>Lunch</option>
                        <option>Dinner</option>
                        <option>Snacks</option>
                        <option>Dessert</option>
                        </select>
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
        </div>
    )
}

const FormikRecipeForm = withFormik({
    validationSchema: Yup.object().shape({
        title: Yup.string().required("Please add a name to your dish"),
        ingredients: Yup.string().required("Please add at least one ingredient"),
        recipe: Yup.string().required("Please provide a recipe for your dish")
    })
})(RecipeForm)

export default FormikRecipeForm;