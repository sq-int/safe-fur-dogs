import axios from 'axios';

const SEARCH_START = 'SEARCH_START';
const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const FOOD_FOUND = 'FOOD_FOUND';


const searchItem = (item, redirect) => dispatch => {
    dispatch({ type: SEARCH_START });
    
    /* hit the backend and search for the item */
    axios.get(`http://localhost:4000/api/food/${item}`)
        .then(res => {
            dispatch({ type: 'FOOD_FOUND', payload: res.data });
            redirect();
        })
        .catch(err => {
            console.log(err);
        })
}

export const searchActionTypes = {
    SEARCH_START,
    SEARCH,
    SEARCH_SUCCESS,
    FOOD_FOUND
}

export const searchActionCreators = {
    searchItem
}