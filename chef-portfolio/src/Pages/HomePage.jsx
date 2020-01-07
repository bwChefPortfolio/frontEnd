import React from 'react';
import RecipeList from '../components/Recipes/recipe-list';
import RecipeForm from '../components/Recipes/recipe-form';

const HomePage = () => (
    <div>
        <RecipeForm />
        <RecipeList />
    </div>
)

export default HomePage;