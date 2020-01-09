import React, { useState, useEffect } from 'react';
import RecipeCard from './recipe-card';
import { CardDeck } from 'reactstrap';
import './recipe-list.scss';
import axios from 'axios';
import SearchForm from '../Search/search-form';

const RecipeList = () => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        axios
            .get("https://chef-portfolio-backend.herokuapp.com/home")
            .then(response => {
                console.log(response)
                setRecipe(response.data);
            })
            .catch(error => {
                console.log("The data was not returned", error)
            })
    }, [])

    return(
        <div>
            <SearchForm
            recipe={recipe}
            />
            <CardDeck>
                {recipe.map(recipe => {
                    return (
                        // <RecipeCard
                        // key={recipe.id}
                        // title={recipe.title}
                        // meal_type={recipe.meal_type}
                        // image_url={recipe.image_url}
                        // ingredients={recipe.ingredients}
                        // directions={recipe.directions}
                        // chef_id={recipe.chef_id}
                        // />
                        <div></div>
                    )
                })}
            </CardDeck>
        </div>
    )
}

export default RecipeList;