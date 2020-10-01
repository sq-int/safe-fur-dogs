import React from "react";
import { searchReducer } from "./searchReducer";
import { searchActionTypes } from "../actions/searchActions";
import {
  food,
  expectedState,
  suggestions,
  expectedSuggestionState,
} from "../../data/mocks/searchItemMock";

const initialState = {
  loading: false,
  error: "",
  query: "",
  limit: false,
  food: [],
  suggestions: [],
};

describe("search reducer", () => {
  test("It should return the initial state", () => {
    const initialState = {
      loading: false,
      error: "",
      query: "",
      limit: false,
      food: [],
      suggestions: [],
    };

    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  test("It should return loading state when starting a search for food", () => {
    const action = {
      type: searchActionTypes.SEARCH_START,
    };

    const update = {
      ...initialState,
      loading: true,
    };

    expect(searchReducer(undefined, action)).toEqual(update);
  });

  test("It should set food state to successfully found food item", () => {
    const action = {
      type: searchActionTypes.FOOD_FOUND,
      payload: food,
    };

    expect(searchReducer(undefined, action)).toEqual(expectedState);
  });

  test("It should return the correct state for a failed food item search", () => {
    const action = {
      type: searchActionTypes.SEARCH_FAIL,
    };

    const update = {
      ...initialState,
      loading: false,
      error: "That particular food item is not yet in our database.",
    };

    expect(searchReducer(undefined, action)).toEqual(update);
  });

  test("It should return the correct state with suggestions for a failed food item search", () => {
    const action = {
      type: searchActionTypes.SUGGESTIONS_FOUND,
      payload: suggestions,
    };

    expect(searchReducer(undefined, action)).toEqual(expectedSuggestionState);
  });

  test("It should reset state back to initial state", () => {
    const action = {
      type: searchActionTypes.RESET_SEARCH,
    };

    expect(searchReducer(undefined, action)).toEqual(initialState);
  });
});
