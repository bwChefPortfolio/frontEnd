import React, {useState} from 'react';
import axios from 'axios';

const CDRecipe = props => {
    console.log(props)

    let recipeId = props.match.params.id;
    let username = props.match.params.username;
    
    const [recipe, setRecipe] = useState({});
    axios.get(`https://chef-portfolio-backend.herokuapp.com/${username}/${recipeId}`)
    .then(res => {
        setRecipe(res.data);
    })
    .catch(error => {
        console.log(error)
    });

    return (
        <div>
        <div>
            <h2>{recipe.title}</h2>
        </div>
        <div>
            <button>Edit Recipe</button>
            <button>Delete</button>
        </div>
        </div>
        
    )

}

export default CDRecipe;
