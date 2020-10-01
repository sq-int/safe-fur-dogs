import React from "react";
import { searchReducer } from "./searchReducer";
import { searchActionTypes } from "../actions/searchActions";
import { food, expectedState } from "../../data/mocks/searchItemMock";

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
    const successAction = {
      type: searchActionTypes.SEARCH_START,
    };

    const update = {
      ...initialState,
      loading: true,
    };

    expect(searchReducer(undefined, successAction)).toEqual(update);
  });

  test("It should set food state to successfully found food item", () => {
    const successAction = {
      type: searchActionTypes.FOOD_FOUND,
      payload: food,
    };

    expect(searchReducer(undefined, successAction)).toEqual(expectedState);
  });

  test("It should return the correct state for a failed food item search", () => {
    const failAction = {
      type: searchActionTypes.SEARCH_FAIL,
    };

    const update = {
      ...initialState,
      loading: false,
      error: "That particular food item is not yet in our database.",
    };

    expect(searchReducer(undefined, failAction)).toEqual(update);
  });
});
