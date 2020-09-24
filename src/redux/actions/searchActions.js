import axios from "axios";

const SEARCH_START = "SEARCH_START";
const SEARCH = "SEARCH";
const SEARCH_SUCCESS = "SEARCH_SUCCESS";
const SEARCH_FAIL = "SEARCH_FAIL";
const SUGGEST_START = "SUGGEST_START";
const SUGGESTIONS_FOUND = "SUGGESTIONS_FOUND";
const FOOD_FOUND = "FOOD_FOUND";
const RESET_SEARCH = "RESET_SEARCH";
const RATE_LIMIT = "RATE_LIMIT";
const SUBMIT_MISSING = "SUBMIT_MISSING";

// action solely for testing testing purposes
const singleTest = () => {
  return "Hello there!";
};

const searchItem = (item, redirect) => (dispatch) => {
  dispatch({ type: SEARCH_START });

  /* hit the backend and search for the item */
  axios.get(`${process.env.REACT_APP_API}/api/food/${item}`).then((res) => {
    console.log("RESPONSE: ", res);
    if (res.data !== null) {
      dispatch({ type: FOOD_FOUND, payload: res.data });
      redirect(`${item}`);
    } else if (res.data === null) {
      axios
        .get(`${process.env.REACT_APP_API}/api/food/suggest/${item}`)
        .then((res) => {
          if (res.data.length > 0) {
            dispatch({ type: SUGGESTIONS_FOUND, payload: res.data });
            redirect(`suggestions/${item}`);
          } else {
            dispatch({ type: SEARCH_FAIL });
            redirect(`not-found/${item}`);
          }
        });
    }
  });
};

const submitMissing = (item, redirect) => (dispatch) => {
  // clear search state
  dispatch({ type: RESET_SEARCH });

  /* submit the missing food item to backend */
  axios
    .post(`${process.env.REACT_APP_API}/api/food/missing`, item)
    .then((res) => {
      redirect(`/thank-you`);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchActionTypes = {
  SEARCH_START,
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SUGGEST_START,
  SUGGESTIONS_FOUND,
  FOOD_FOUND,
  RESET_SEARCH,
  RATE_LIMIT,
  SUBMIT_MISSING,
};

export const searchActionCreators = {
  singleTest,
  searchItem,
  submitMissing,
};
