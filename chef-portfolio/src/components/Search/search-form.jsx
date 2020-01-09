import React, { useState, useEffect } from 'react';
import RecipeCard from '../Recipes/recipe-card';
import '../Recipes/recipe-card.scss';
import '../Recipes/recipe-list.scss';
import { CardDeck } from 'reactstrap';

const SearchForm = (props) => {
    console.log("These are search props", props);

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        const results = props.recipe.filter(recipe => 
            recipe.meal_type.toLowerCase().includes(query.toLowerCase())
        );
        setData(results);
    }, [query])

    const handleChange = event => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <form>
                <input
                type='search'
                name='search'
                placeholder='Search Recipes'
                value={query}
                onChange={handleChange}
                />
            </form>
            <div className='rendered-cards'>
                {data.length > 0 ? data.map(recipe => {
                    return (
                        <CardDeck>
                            <RecipeCard
                            key={recipe.id}
                            title={recipe.title}
                            meal_type={recipe.meal_type}
                            image_url={recipe.image_url}
                            ingredients={recipe.ingredients}
                            directions={recipe.directions}
                            chef_id={recipe.chef_id}
                            />
                        </CardDeck>
                    )
                }) : props.recipe.map(recipe => {
                    return (
                        <CardDeck>
                            <RecipeCard
                            key={recipe.id}
                            title={recipe.title}
                            meal_type={recipe.meal_type}
                            image_url={recipe.image_url}
                            ingredients={recipe.ingredients}
                            directions={recipe.directions}
                            chef_id={recipe.chef_id}
                            />
                        </CardDeck>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchForm;