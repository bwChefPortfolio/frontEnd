// import React, {useState, useEffect} from 'react';
// import {connect} from 'react-redux';
// import {addRecipe} from '../../store/actions';
// import { withFormik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import './recipe-form.scss';

// const AddRecipe = (props, { values, errors, touched, status }) => {
//     const username = localStorage.getItem('username');
//     const [newRecipe, setNewRecipe] = useState({
//         title: '',
//         meal_type: '',
//         image_url: 'https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60e.com',
//         ingredients: '',
//         directions: '',
//     });
//     console.log('New recipe added', newRecipe)

//     const [recipe, setRecipe] = useState([]);
//     useEffect(() => {
//         console.log("status has changed", status);
//         status && setRecipe(recipe => [...recipe, status]);
//     }, [status]);

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.addRecipe(username, newRecipe);
//         // props.history.push(`/`);
//     };
//     const handleChanges = e => {
//         setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
//     };
    
//     return (
//         <div className='recipe-container'>
//             <img src='https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80' />
//             <div>
//              <Form className='recipe-form' onSubmit={handleSubmit}>

//              <div className='labels'>
//                     <label htmlFor='title'>Recipe Name: </label>
//                     <label htmlFor='type'>Meal Type: </label>
//                     <label htmlFor='ingredients'>Ingredients: </label>
//                     <label htmlFor='recipe'>Recipe: </label>
//                 </div>

//             <div className='fields'>
//                 <div className='field'>
//                     <Field className='title'
//                     id='title'
//                     name='title'
//                     type='text'
//                     value={newRecipe.title}
//                     onChange={handleChanges}
//                     />
//                     {/* {touched.title && errors.title && (<p className='error'>{errors.title}</p>)} */}
//                 </div>
//                 <div className='field'>
//                     <Field as='select' className='select' id='meal_type' name='meal_type' value={newRecipe.meal_type}
//                     onChange={handleChanges}>
//                         <option value='none' selected disabled hidden>Choose an option</option>
//                         <option value='Breakfast'>Breakfast</option>
//                         <option value='Lunch'>Lunch</option>
//                         <option value='Dinner'>Dinner</option>
//                         <option value='Snacks'>Snacks</option>
//                         <option value='Dessert'>Dessert</option>
//                     </Field>
//                     {/* {touched.meal_type && errors.meal_type && (<p className='error'>{errors.meal_type}</p>)} */}
//                 </div>
//                 <div className='field'>
                    
//                     <Field className='ingredients'
//                     id='ingredients'
//                     name='ingredients'
//                     type='text'
//                     value={newRecipe.ingredients}
//                     onChange={handleChanges}
//                     />
//                     {/* {touched.ingredients && errors.ingredients && (<p className='error'>{errors.ingredients}</p>)} */}
//                     </div>
//                 <div className='field'>
                    
//                     <Field className='directions'
//                     id='directions'
//                     name='directions'
//                     type='text'
//                     value={newRecipe.directions}
//                     onChange={handleChanges}
//                     />
//                     {/* {touched.directions && errors.directions && (<p className='error'>{errors.directions}</p>)} */}
//                 </div>
//                 <button type='submit'>Add Recipe</button>
//             </div>
//         </Form>
//    </div>
//    </div>  
//     )
// }

// const FormikAddRecipe = withFormik({
//     mapPropsToValues(props) {
//         return {
//             title: props.title || "",
//             meal_type: props.type,
//             ingredients: props.ingredients || "",
//             directions: props.directions || ""
//         }
//     },
//     validationSchema: Yup.object().shape({
//         title: Yup.string().required("*Please add a name to your dish"),
//         meal_type: Yup.string().oneOf(["Breakfast", "Lunch", "Dinner", "Snacks", "Dessert"]).required("*Please select a meal type"),
//         ingredients: Yup.string().required("*Please add at least one ingredient"),
//         directions: Yup.string().required("*Please provide a recipe for your dish")
//     })
// })(AddRecipe)

// const mapStateToProps = state => {
//     return state;
// };
  
// export default connect(mapStateToProps, { addRecipe })(AddRecipe);
  



import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../../store/actions';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './recipe-form.scss';

const AddRecipe = props => {
    const username = localStorage.getItem('username');
    const [newRecipe, setNewRecipe] = useState({
        title: '',
        meal_type: '',
        image_url: 'https://images.unsplash.com/photo-1536489885071-87983c3e2859?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60e.com',
        ingredients: '',
        directions: '',
    });
    console.log('New recipe added', newRecipe)

    const handleSubmit = e => {
        e.preventDefault();
        props.addRecipe(username, newRecipe);
        // props.history.push(`/`);
    };
    const handleChanges = e => {
        setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
    };
    
    return (
        <div className='recipe-container'>
            <img src='https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80' />
            <div>
             <form className='recipe-form' onSubmit={handleSubmit}>
                 
             <div className='labels'>
                    <label htmlFor='title'>Recipe Name: </label>
                    <label htmlFor='type'>Meal Type: </label>
                    <label htmlFor='ingredients'>Ingredients: </label>
                    <label htmlFor='recipe'>Recipe: </label>
                </div>

            <div className='fields'>
                <div className='field'>
                    <input className='title'
                    id='title'
                    name='title'
                    type='text'
                    value={newRecipe.title}
                    onChange={handleChanges}
                    />
                </div>
                <div className='field'>
                    <select className='select' name='meal_type' value={newRecipe.meal_type}
                    onChange={handleChanges}>
                        <option value='none' selected disabled hidden>Choose an option</option>
                        <option value='Breakfast'>Breakfast</option>
                        <option value='Lunch'>Lunch</option>
                        <option value='Dinner'>Dinner</option>
                        <option value='Snacks'>Snacks</option>
                        <option value='Dessert'>Dessert</option>
                    </select>
                </div>
                <div className='field'>
                    
                    <input className='ingredients'
                
                    name='ingredients'
                    type='text'
                    value={newRecipe.ingredients}
                    onChange={handleChanges}
                    />
                    </div>
                <div className='field'>
                    
                    <input className='directions'
                 
                    name='directions'
                    type='text'
                    value={newRecipe.directions}
                    onChange={handleChanges}
                    />
                </div>
                <button type='submit'>Add Recipe</button>
            </div>
        </form>
       
     
   </div>
   </div>

        
    )
}
const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, { addRecipe })(AddRecipe);
  


