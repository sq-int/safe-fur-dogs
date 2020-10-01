import React from "react";
import { searchReducer } from "./searchReducer";
import { searchActionTypes } from "../actions/searchActions";
import { food, expectedState } from "../../data/mocks/searchItemMock";

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

  test("It should set food state to successfully found food item", () => {
    const successAction = {
      type: searchActionTypes.FOOD_FOUND,
      payload: food,
    };

    expect(searchReducer(undefined, successAction)).toEqual(expectedState);
  });
});
