import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addRecipe} from '../../store/actions';
import './recipe-form.scss';

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
        <div className='recipe-container'>
            <img src='https://images.unsplash.com/photo-1551987840-f62d9c74ae78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80' />
            <div>
             <form className='recipe-form' onSubmit={handleSubmit}>

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
   </div>

        
    )
}
const mapStateToProps = state => {
    return state;
  };
  
  export default connect(mapStateToProps, { addRecipe })(AddRecipe);
  


