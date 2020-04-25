import axios from 'axios';

const SEARCH_START = 'SEARCH_START';
const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';


const searchItem = (item) => dispatch => {
    console.log('MADE IT TO SEARCH ITEM ACTION CREATOR');
    dispatch({ type: SEARCH_START });
    
    /* hit the backend and search for the item */
    axios.get(`http://localhost:4000/api/food/${item}`)
        .then(res => {
            console.log(`DATA COMING BACK `, res);
        })
        .catch(err => {
            console.log(err);
        })
}

export const searchActionTypes = {
    SEARCH_START,
    SEARCH,
    SEARCH_SUCCESS
}

export const searchActionCreators = {
    searchItem
}