import {START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from './actions';

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
        
        default: 
        return state;
            
    }
};

export default reducer;