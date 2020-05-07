import { searchActionTypes } from '../actions';

const {
    SEARCH_START,
    SEARCH_SUCCESS,
    FOOD_FOUND,
    RESET_SEARCH,
    SEARCH_FAIL,
    RATE_LIMIT
} = searchActionTypes;

const initialState = {
    loading: false,
    error: '',
    query: '',
    limit: false,
    food: []
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_START:
            return {
                ...state,
                loading: true
            }
        case SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                query: action.payload
            }
        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: 'That particular food item is not yet in our daatabase.'
            }
        case RATE_LIMIT:
            return {
                ...state,
                loading: false,
                limit: true,
                error: 'You have hit our free rate limit for searches. Please wait awhile before submitting another request or consider buying me a coffee to help increase our limits!'
            }
        case FOOD_FOUND:
            return {
                ...state,
                food: action.payload,
                loading: false
            }
        case RESET_SEARCH:
            return initialState;
        default:
            return state;
    }
}