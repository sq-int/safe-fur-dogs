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

const mockSearch = jest.fn((query) => {
  return Promise.resolve({ query });
});

// const mockDispatch = jest.fn();
// jest.mock("react-redux", () => ({
//   useSelector: jest.fn(),
//   useDispatch: () => mockDispatch,
// }));

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

// ensuring we can access and test our redux action creators
test("Ensuring action creators can be tested", () => {
  expect(singleTest()).toBe("Hello there!");
});

// test("it renders the correct components for the SearchView view", () => {
//   render(
//     <SearchBox>
//       <MainSearch>
//         <input />
//         <button type="submit" />
//       </MainSearch>
//     </SearchBox>
//   );
// });

describe("SearchBox component", () => {
  beforeEach(() => {
    render(<SearchBox />);
  });

  //   test("Required error should be displayed when search query is invalid", async () => {
  //     fireEvent.submit(screen.getByTestId("search-query"));

  //     expect(
  //       await screen.getByText("You must enter in a food name!")
  //     ).toHaveLength(30);
  //     expect(mockSearch).not.toBeCalled();
  //   });
});
