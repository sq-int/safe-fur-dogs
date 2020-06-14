import { searchActionTypes } from '../actions';

const {
    SEARCH_START,
    SEARCH_SUCCESS,
    SUGGEST_START,
    SUGGESTIONS_FOUND,
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
    food: [],
    suggestions: []
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
                error: 'That particular food item is not yet in our database.'
            }
        case SUGGEST_START:
            return {
                ...state,
                loading: true,
            }
        case SUGGESTIONS_FOUND:
            return {
                ...state,
                loading: false,
                suggestions: action.payload,
                error: ''
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