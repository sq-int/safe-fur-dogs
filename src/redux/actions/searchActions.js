import axios from 'axios';

const SEARCH_START = 'SEARCH_START';
const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAIL = 'SEARCH_FAIL';
const SUGGEST_START = 'SUGGEST_START';
const SUGGESTIONS_FOUND = 'SUGGESTIONS_FOUND';
const FOOD_FOUND = 'FOOD_FOUND';
const RESET_SEARCH = 'RESET_SEARCH';
const RATE_LIMIT = 'RATE_LIMIT';


const searchItem = (item, redirect) => dispatch => {
    dispatch({ type: SEARCH_START });

    /* hit the backend and search for the item */
    axios.get(`${process.env.REACT_APP_API}/api/food/${item}`)
        .then(res => {
            if (res.data.length === 1) {
                dispatch({ type: FOOD_FOUND, payload: res.data });
                redirect(`${item}`);
            }

            if (res.data.length > 1) {
                dispatch({ type: SUGGESTIONS_FOUND, payload: res.data });
                redirect(`suggestions/${item}`);
            }
        })
        .catch(err => {
            console.log(`THIS IS OUR ERROR `, err.response);

            if (err.response.status === 429) {
                dispatch({ type: RATE_LIMIT });
                redirect(`${item}`);
            }
            else {
                dispatch({ type: SEARCH_FAIL });
                redirect(`${item}`);
            }
        })
}

export const searchActionTypes = {
    SEARCH_START,
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    SUGGEST_START,
    SUGGESTIONS_FOUND,
    FOOD_FOUND,
    RESET_SEARCH,
    RATE_LIMIT
}

export const searchActionCreators = {
    searchItem
}