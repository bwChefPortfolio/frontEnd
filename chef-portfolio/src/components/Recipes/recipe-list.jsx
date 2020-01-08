import React, { useState, useEffect } from 'react';
import RecipeCard from './recipe-card';
import { CardDeck } from 'reactstrap';
import './recipe-list.scss';
import axios from 'axios';

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
        <CardDeck>
            {recipe.map(recipe => {
                return (
                    <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    meal_type={recipe.meal_type}
                    image_url={recipe.image_url}
                    ingredients={recipe.ingredients}
                    directions={recipe.directions}
                    chef_id={recipe.chef_id}
                    />
                )
            })}
            
            {/* <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard /> */}
        </CardDeck>
    )
}

export default RecipeList;