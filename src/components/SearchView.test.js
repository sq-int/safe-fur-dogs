// react
import React from "react";
// jest
import {
  render,
  screen,
  fireEvent,
  waitFor,
  mockImplmentation,
} from "@testing-library/react";
// views
import SearchView from "./SearchView";
// redux
import { useDispatch, useSelector } from "react-redux";
// react-router-dom
import { useHistory } from "react-router-dom";
// styles
import { SearchBox } from "../styles/global/structure";
import { MainSearch } from "../styles/global/forms";
// search action creators
import { searchActionCreators } from "../redux/actions/searchActions";

const singleTest = searchActionCreators.singleTest;

const initialState = {
  loading: false,
  error: "",
  query: "",
  limit: false,
  food: [],
  suggestions: [],
};

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

// ensuring we can access and test our redux action creators
test("Ensuring action creators can be tested", () => {
  expect(singleTest()).toBe("Hello there!");
});

describe("Submit button calls onSubmit to start search", () => {
  beforeEach(() => {
    useSelector.mockImplmentation((callback) => {
      return callback(initialState);
    });
  });
  afterEach(() => {
    useSelector.mockClear();
  });
  // const setState = jest.fn();
  // const useStateMock = (initState) => [initState, setState];

  test("It renders SearchView", () => {
    render(<SearchView />);
  });

  // const button = container.getByTestId("submit-query");

  // console.log(button);

  // fireEvent.click(getElementById("submit-query"));

  // expect(onSubmit).toHaveBeenCalled(1);
});
