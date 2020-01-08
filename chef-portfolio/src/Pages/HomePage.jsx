import React from 'react';
import RecipeList from '../components/Recipes/recipe-list';
import './HomePage.scss';

const HomePage = () => (
    <div className='recipe-list-container'>
        <RecipeList />
    </div>
)

export default HomePage;