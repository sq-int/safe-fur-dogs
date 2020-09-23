// react
import React from "react";
// jest
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

// ensuring we can access and test our redux action creators
test("Ensuring action creators can be tested", () => {
  expect(singleTest()).toBe("Hello there!");
});

// SearchBox component renders on SearchView render
describe("SearchBox component", () => {
  beforeEach(() => {
    render(<SearchBox />);
  });
});
