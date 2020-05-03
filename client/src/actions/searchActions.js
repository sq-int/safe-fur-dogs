import axios from 'axios';

const SEARCH_START = 'SEARCH_START';
const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAIL = 'SEARCH_FAIL';
const FOOD_FOUND = 'FOOD_FOUND';
const RESET_SEARCH = 'RESET_SEARCH';


const searchItem = (item, redirect) => dispatch => {
    dispatch({ type: SEARCH_START });

    /* hit the backend and search for the item */
    axios.get(`http://localhost:4000/api/food/${item}`)
        .then(res => {
            if(res.data.length > 0) {
                dispatch({ type: FOOD_FOUND, payload: res.data });
                redirect();
            }
        })
        .catch(err => {
            dispatch({ type: SEARCH_FAIL });
            redirect();
        })
}

export const searchActionTypes = {
    SEARCH_START,
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    FOOD_FOUND,
    RESET_SEARCH
}

export const searchActionCreators = {
    searchItem
}