import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import axiosWithAuth from '../utils/axiosWithAuth';
import {getChefRecipes} from '../store/actions';
import ChefCard from './ChefCard';


const ChefDashboard = props => {
    console.log(props)

    const [recipes, setRecipes] = useState([]);
        const username = localStorage.getItem("username");
        // const id = match.params.id

    useEffect(() => {
        axiosWithAuth()
            .get(`https://chef-portfolio-backend.herokuapp.com/chefs/${username}`)
            .then(response => {
                console.log(response)
                setRecipes(response.data)
                
            })
            .catch(error => {
                console.log("The data was not returned", error)
            })
    }, [])

    // useEffect(() => {
    //     getChefRecipes(username)
    //     setRecipes(props.recipes)
    // }, [])
    // console.log('logging props after chefdashboard useEffect', props);

    //  let newRecipes = recipes
    return (
        
        <div>
        <h1>test</h1>
       {recipes.map(recipe => {
           console.log("THIS IS THE RECIPE",recipe)
                return (
                    <Link to={`/chefcard/${recipe.id}`}>
                    <ChefCard
                    id={recipe.id}
                    title={recipe.title}
                    meal_type={recipe.meal_type}
                    image_url={recipe.image_url}
                    ingredients={recipe.ingredients}
                    directions={recipe.directions}
                    chef_id={recipe.chef_id}
                    >
                    <button>Delete</button>
                    </ChefCard>
                    </Link>
                //     <div key={recipe.id}>
                    
                //     <p>title={recipe.title}</p>
                //    <p>meal_type={recipe.meal_type}</p> 
                //    <p>image_url={recipe.image_url}</p> 
                //     <p>ingredients={recipe.ingredients}</p>
                //     <p>directions={recipe.directions}</p>
                //     <p>chef_id={recipe.chef_id}</p>
                //    </div>
                )
            })} 
    </div>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps)(ChefDashboard)



    