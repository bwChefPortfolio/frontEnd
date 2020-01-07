import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchRecipes} from '../store/actions';

import RecipeCard from './RecipeCard';

const HomeDashboard = ({fetchRecipes, recipes, error, isFetching}) => {
    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes])

    console.log(recipes);

    if (isFetching) {
        return <h2>Loading Recipes...</h2>
    }
    return (
        <div>
            {error && <p>{error}</p>}
            {recipes.map(recipe => (
                <RecipeCard recipe={recipe}/>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (mapStateToProps, {fetchRecipes})(HomeDashboard);