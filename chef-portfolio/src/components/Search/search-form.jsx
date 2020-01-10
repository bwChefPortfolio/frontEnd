import React, { useState, useEffect } from 'react';
import RecipeCard from '../Recipes/recipe-card';
import '../Recipes/recipe-card.scss';
import '../Recipes/recipe-list.scss';
import { CardDeck } from 'reactstrap';

const SearchForm = (props) => {
    // console.log("These are search props", props);

    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    // const[test, setTest] = useState([]);
    const[searchParams, setSearchParams] = useState("");

    useEffect(() => {
        if (searchParams === 'title') {
            const results = props.recipe.filter(recipe => 
                recipe.title.toLowerCase().includes(query.toLowerCase())
            );
            setData(results);
        } else if (searchParams === 'meal_type') {
            const results = props.recipe.filter(recipe => 
                recipe.meal_type.toLowerCase().includes(query.toLowerCase())
            );
            setData(results);
        } else if (searchParams === 'ingredients') {
            const results = props.recipe.filter(recipe => 
                recipe.ingredients.toLowerCase().includes(query.toLowerCase())
            );
            setData(results);
        }
    }, [query])

    const handleChange = event => {
        setQuery(event.target.value);
        // console.log("handle change", query)
    };

    const handleClick = event => {
        setSearchParams(event.target.value);
    }

    // console.log("Test", searchParams);
    // console.log("query", query)
    // console.log("recipe", props.recipe)
    

    return (
        <div>
            <form>
                <label htmlFor='search_param_dropdown'>Search By </label>
                <select id='search_param_dropdown' name='search_param_dropdown' onClick={handleClick}>
                    <option value='none' selected disabled hidden>-Choose an option-</option>
                    <option value='title'>Title</option>
                    <option value='meal_type'>Meal Type</option>
                    <option value='ingredients'>Ingredients</option>
                </select>
                <input
                type='search'
                name='search'
                placeholder='Search Recipes'
                value={query}
                onChange={handleChange}
                />
            </form>
            <div className='rendered-cards'>
                {
                data.length > 0 ? data.map(recipe => {
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
                }) :
                 props.recipe.map(recipe => {
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
                }
                )}
            </div>
        </div>
    )
}

export default SearchForm;



// const [query, setQuery] = useState('');
// const [data, setData] = useState([]);

// const[test, setTest] = useState([]);
// const[searchParams, setSearchParams] = useState("");

// useEffect(() => {
//     const results = props.recipe.map(item => 
//         searchParams === "title" && item.title.toLowerCase().includes(query.toLowerCase()) && setData([...data, item])
//     );
//     // setData(results);
//     console.log("results", results)
// }, [query])

// const handleChange = event => {
//     setQuery(event.target.value);
//     console.log("handle change", query)
// };

// const handleClick = event => {
//     setSearchParams(event.target.value);
// }

// // console.log("Test", searchParams);
// // console.log("query", query)
// console.log("recipe", props.recipe)