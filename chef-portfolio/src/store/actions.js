import React from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';



export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAULURE";
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS"


// get all recipes in backend for homepage

export const fetchRecipes = () => {
    
    dispatchEvent({ type: START_FETCHING});
    axios.get(`https://chef-portfolio-backend.herokuapp.com/home`)
    .then(res => dispatchEvent({ type: FETCH_SUCCESS, payload: res.data}))
    .then(res => console.log(res.data))
    .catch(err => dispatchEvent({type: FETCH_FAILURE, payload: err.response}));
};

// export const fetchRecipeCard = (id) => dispatch => {
//     dispatch({type: START_FETCHING});
//     axios
//     .get (`https://chef-portfolio-backend.herokuapp.com/${username}/${id}`)
//     .then(res => dispatch({type: FETCH_CARD_SUCCESS, payload: res.data}))
//     .then(res => console.log(res.data))
//     .catch(err => dispatch({type: FETCH_FAILURE, payload: err.response}))
// }

//get chef info

export const FETCHING_CHEF = "FETCHING_CHEF";
export const FETCHING_CHEF_SUCCESS = "FETCHING_CHEF_SUCCESS";
export const FETCHING_CHEF_FAILURE = "FETCHING_CHEF_FAILURE";

export const getChef = id => dispatch => {
    dispatch({type: FETCHING_CHEF});

    axiosWithAuth()
    .get(`https://chef-portfolio-backend.herokuapp.com/home/`)
    .then(res => {
        dispatch({type: FETCHING_CHEF_SUCCESS, payload: res.data[0]});

        console.log(res)
    })
    .catch(err => {
        dispatch({type: FETCHING_CHEF_FAILURE, payload: err.response})
    })
};

//Add a recipe

export const ADD_RECIPE = "ADD_RECIPE";
export const ADD_RECIPE_SUCCESS= "ADD_RECIPE_SUCCESS";
export const ADD_RECIPE_FAILURE= "ADD_RECIPE_FAILURE";

export const addRecipe = (username, newRecipe) => dispatch => {
    dispatch({ type: ADD_RECIPE, payload: newRecipe});
    console.log(newRecipe);
    console.log(username)
    axiosWithAuth()
    .post(`https://chef-portfolio-backend.herokuapp.com/chefs/${username}`, newRecipe)
    .then(res => {
        dispatch({ type: ADD_RECIPE_SUCCESS, payload: res.data});
        console.log(res)
    })
    .catch(err => {
        dispatch({type: ADD_RECIPE_FAILURE, payload: err.response});
        console.log('error')
    })
};

// Get all recipes from a specific chef

export const FETCH_CHEF_RECIPE = "FETCH_CHEF_RECIPE";
export const FETCH_CHEF_RECIPE_SUCCESS = "FETCH_CHEF_RECIPE_SUCCESS";
export const FETCH_CHEF_RECIPE_FAILURE = "FETCH_CHEF_RECIPE_FAILURE";

export const getChefRecipes = (username) => dispatch => {
    dispatch({type: FETCH_CHEF_RECIPE});

    axiosWithAuth()
    .get(`https:/chef-portfolio-backend.herokuapp.com/chefs/${username}`)
    .then(res => {
        dispatch({type: FETCH_CHEF_RECIPE_SUCCESS, payload: res.data});

        console.log(res.data)
    })
    .catch(err => {
        dispatch({type: FETCH_CHEF_RECIPE_FAILURE, payload: err.response})
    });
};

//Delete recipe

// export const DELETE_RECIPE = 'DELETE_RECIPE';
// export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
// export const DELETE_RECIPE_FAILURE = 'DELETE_RECIPE_FAILURE';

// export const deleteRecipe = (username, id) => dispatch => {
//     console.log(`recipe id: ${id}`);
//     dispatch({ type: DELETE_RECIPE });
    // axiosWithAuth()
    //     .delete(`https://chef-portfolio-backend.herokuapp.com/chefs/${username}/${id}`)
    //     .then((res) => {
    //         dispatch({ type: DELETE_RECIPE_SUCCESS, payload: res.data });
    //     })
    //     .catch(err => {
    //         console.log('error', err)
    //         dispatch({ type: DELETE_RECIPE_FAILURE, payload: err });
    //     })
// }