import { searchActionTypes } from '../actions';

const {
    START_SEARCH,
    SEARCH,
    SEARCH_SUCCESS,
} = searchActionTypes;

const initialState = {
    loading: false,
    error: '',
    query: ''
}

export const searchReducer = (state = initialState, action) => {
    switch(action.type) {
        case START_SEARCH:
            console.log('Made it to start search');
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
        default:
            return state;
    }
}