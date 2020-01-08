import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeCard from './Recipes/recipe-card';


export default function HomeDashboard() {
    const [recipes, setRecipes] = useState([])
    const [gotData, changeData] = useState([])

    useEffect(() => {
        axios.get(`https://chef-portfolio-backend.herokuapp.com/home`)
        .then(response => {
            const recipeInfo = response.data.results;
            console.log('returning recipe info', response)
            setRecipes(recipeInfo);
        })
        .catch(error => {
            console.log('error!')
        })
    }, [])

    return (
        <div>
            <h2>Guest Dashboard</h2>
            <div>
                {gotData.map(data => {
                    return (
                        <RecipeCard
                        key={data.id}
                        title={data.title}
                        meal={data.meal_type}
                        image={data.image_url}
                        ingredients={data.ingredients}
                        directions={data.directions}
                        chefId={data.chef_id}
                        />
                    )
                })}
            </div>
        </div>
    )
}