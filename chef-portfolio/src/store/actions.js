import React from 'react';
import axios from 'axios';

//action types

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAULURE";
export const FETCH_CARD_SUCCESS = "FETCH_CARD_SUCCESS"

export const fetchRecipes = () => {
    //action objects
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