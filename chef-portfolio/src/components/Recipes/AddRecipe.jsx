// import React, {useState} from 'react';
// import {connect} from 'react-redux';
// import addRecipe from '../../store/actions';

// const AddRecipe = props => {
//     const id = localStorage.getItem('id');
//     const [newRecipe, setNewRecipe] = useState({
//         id: '',
//         title: '',
//         meal_type: '',
//         image_url: '',
//         ingredients: '',
//         directions: '',
//     });
//     console.log('New recipe added', newRecipe)

//     const handleSubmit = e => {
//         e.preventDefault();
//         props.addRecipe(newRecipe);
//         props.history.push(`/chefs/${localStorage.getItem('id')}`);
//     };
//     const handleChanges = e => {
//         setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
//     };
    
//     return (
//             <div>
//              <Form className='recipe-form' onSubmit={handleSubmit}>
            
//             <div className='labels'>
//                 <label htmlFor='title'>Recipe Name: </label>
//                 <label htmlFor='type'>Meal Type: </label>
//                 <label htmlFor='ingredients'>Ingredients: </label>
//                 <label htmlFor='recipe'>Recipe: </label>
//             </div>
//             <div className='fields'>
//                 <div className='field'>
//                     <Field className='title'
//                     id='title'
//                     name='title'
//                     type='text'
//                     value={newRecipe.title}
//                     onChange={handleChanges}
//                     />{touched.title && errors.title && (<p className='error'>{errors.title}</p>)}
//                 </div>
//                 <div className='field'>
//                     <Field as='select' className='select' id='meal_type' name='meal_type' value={newRecipe.meal_type}
//                     onChange={handleChanges}>
//                     <option value='none' selected disabled hidden>Choose an option</option>
//                     <option value='Breakfast'>Breakfast</option>
//                     <option value='Lunch'>Lunch</option>
//                     <option value='Dinner'>Dinner</option>
//                     <option value='Snacks'>Snacks</option>
//                     <option value='Dessert'>Dessert</option>
//                     </Field>{touched.meal_type && errors.meal_type && (<p className='error'>{errors.meal_type}</p>)}
//                 </div>
//                 <div className='field'>
                    
//                     <Field className='ingredients'
//                     id='ingredients'
//                     name='ingredients'
//                     type='text'
//                     value={newRecipe.ingredients}
//                     onChange={handleChanges}
//                     />{touched.ingredients && errors.ingredients && (<p className='error'>{errors.ingredients}</p>)}
//                     </div>
//                 <div className='field'>
                    
//                     <Field className='directions'
//                     id='directions'
//                     name='directions'
//                     type='text'
//                     value={newRecipe.directions}
//                     onChange={handleChanges}
//                     />
//                 </div>
//                 <button type='submit'>Add Recipe</button>
//             </div>
//         </Form>
//         {recipe.map(dish => {
//             return(
//                 <ul key={dish.id}>
//                     <li>Title: {dish.title}</li>
//                     <li>Meal Type: {dish.type}</li>
//                     <li>Ingredients: {dish.ingredients}</li>
//                     <li>Recipe: {dish.recipe}</li>
//                 </ul>
//             )
//         })}
//    </div>

        
//     )
// }

// export default AddRecipe;

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../../store/actions';

const AddRecipe = props => {
    const id = localStorage.getItem('id');
    const [newRecipe, setNewRecipe] = useState({
        title: '',
        meal_type: '',
        image_url: 'google.com',
        ingredients: '',
        directions: '',
    });
    console.log('New recipe added', newRecipe)

    const handleSubmit = e => {
        e.preventDefault();
        props.addRecipe('chefa', newRecipe);
        // props.history.push(`/home`);
    };
    const handleChanges = e => {
        setNewRecipe({...newRecipe, [e.target.name]: e.target.value});
    };
    
    return (
            <div>
             <form className='recipe-form' onSubmit={handleSubmit}>
{/*             
            <div className='labels'>
                <label htmlFor='title'>Recipe Name: </label>
                <label htmlFor='type'>Meal Type: </label>
                <label htmlFor='ingredients'>Ingredients: </label>
                <label htmlFor='recipe'>Recipe: </label>
            </div> */}
            <div className='fields'>
                <div className='field'>
                    <input className='title'
                   
                    name='title'
                    type='text'
                    value={newRecipe.title}
                    onChange={handleChanges}
                    />
                </div>
                <div className='field'>
                    <input as='select' className='select' name='meal_type' value={newRecipe.meal_type}
                    onChange={handleChanges}>

                    </input>
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

        
    )
}
const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, { addRecipe })(AddRecipe);
  


