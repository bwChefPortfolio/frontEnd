import React from 'react';
import RecipeCard from './recipe-card';
import { CardDeck } from 'reactstrap';
import './recipe-list.scss';

const RecipeList = () => (
        <CardDeck>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </CardDeck>
)

export default RecipeList;