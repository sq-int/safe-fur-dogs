import axios from 'axios';

const SEARCH_START = 'SEARCH_START';
const SEARCH = 'SEARCH';
const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
const SEARCH_FAIL = 'SEARCH_FAIL';
const SUGGEST_START = 'SUGGEST_START';
const SUGGESTIONS = 'SUGGESTIONS';
const FOOD_FOUND = 'FOOD_FOUND';
const RESET_SEARCH = 'RESET_SEARCH';
const RATE_LIMIT = 'RATE_LIMIT';


const searchItem = (item, redirect) => dispatch => {
    dispatch({ type: SEARCH_START });

    /* hit the backend and search for the item */
    axios.get(`${process.env.REACT_APP_API}/api/food/${item}`)
        .then(res => {
            if (res.data.length > 0) {
                dispatch({ type: FOOD_FOUND, payload: res.data });
                redirect(`${item}`);
            }
        })
        .catch(err => {
            if (err.response.status === 429) {
                dispatch({ type: RATE_LIMIT });
                redirect(`/`);
            }
            else if(err.response.status === 400) {
                dispatch(searchSuggestions(item, redirect));
            }
            else {
                alert(`HOW THE FK DID WE GET HERE?`);
            }
        })
}

const searchSuggestions = (item, redirect) => dispatch => {
    dispatch({ type: SUGGEST_START });

    axios.get(`${process.env.REACT_APP_API}/${process.env.REACT_APP_SUGGESTED}/${item}`)
    .then(res => {
        if(res.data.length !== 0) {
            alert('WE FOUND SUGGESTIONS');
            dispatch({ type: SUGGESTIONS, payload: res.data });
            redirect(`suggestions/${item}`);
        }                    
        else if(res.data.length === 0) {
            alert('WE FAILED OUR SEARCH');
            dispatch({ type: SEARCH_FAIL });
            redirect(`${item}`);
        }
    })
    .catch(err => {
        // console.log(err);
        alert('WE FAILED OUR SEARCH');
        dispatch({ type: SEARCH_FAIL });
    })

}

export const searchActionTypes = {
    SEARCH_START,
    SEARCH,
    SEARCH_SUCCESS,
    SEARCH_FAIL,
    SUGGEST_START,
    SUGGESTIONS,
    FOOD_FOUND,
    RESET_SEARCH,
    RATE_LIMIT
}

export const searchActionCreators = {
    searchItem,
    searchSuggestions
}