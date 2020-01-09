import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_RECIPE, ADD_RECIPE_SUCCESS, ADD_RECIPE_FAILURE, FETCH_RECIPE, FETCH_RECIPE_SUCCESS, FETCH_RECIPE_FAILURE} from './actions';

const initialState = {
    recipes: [],
    isFetching: false,
    error: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
        return {
            ...state,
            isFetching: true,
            error: ""
        };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: "",
                recipes: action.paylaod
            };
        case FETCH_FAILURE:
            return {
                 ...state,
                error: action.payload,
                isFetching: false
            };
        case ADD_RECIPE:
            return {
                ...state,
                isFetching: false,
            }
        case ADD_RECIPE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        case ADD_RECIPE_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "",
                recipe: action.payload
            }
        case FETCH_RECIPE:
            return {
                ...state,
                isFetching: true,
                error: '',
            }
        case FETCH_RECIPE_SUCCESS:
            return {
                ...state, 
                isFetching: false,
                recipe: action.payload
            }
        case FETCH_RECIPE_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        
        default: 
        return state;
            
    }
};

export default reducer;