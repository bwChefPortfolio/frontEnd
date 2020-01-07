import React from 'react';
import axios from 'axios';

//action types

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAULURE";

export const fetchRecipes = () => {
    //action objects
    dispatchEvent({ type: START_FETCHING});
    axios.get(
        //need backend link for recipes
        )
    .then(res => dispatchEvent({ type: FETCH_SUCCESS, payload: res.data}))
    .then(res => console.log(res.data))
    .catch(err => dispatchEvent({type: FETCH_FAILURE, payload: err.response}));
};