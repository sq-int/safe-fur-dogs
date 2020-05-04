import { searchActionTypes } from '../actions';

const {
    SEARCH_START,
    SEARCH_SUCCESS,
    FOOD_FOUND,
    RESET_SEARCH,
    SEARCH_FAIL
} = searchActionTypes;

const initialState = {
    loading: false,
    error: '',
    query: '',
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
            console.log('SEARCH SUCCESS ', action.payload);
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