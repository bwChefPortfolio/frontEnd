import React from 'react';
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

//action types

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAULURE";
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS"

// get all recipes in backend

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
    .get(
        //insert backend link here
    )
    .then(res => {
        dispatch({type: FETCHING_CHEF_SUCCESS, payload: res.data[0]});

        console.log(res)
    })
    .catch(err => {
        dispatch({type: FETCHING_CHEF_FAILURE, payload: err.response})
    })
};