import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* actions */
import { searchActionTypes } from "../../redux/actions/searchActions";

/* styles */
import {
  ErrorButton,
  FoodErrorContent,
  FoodErrorTitle,
} from "../../styles/food";

export default function NotFound() {
  /* useHistory from react-router-dom configuration */
  const history = useHistory();

  /* grab not found item from params */
  const params = useParams();

  /* bring in redux dispatch and config */
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  /* action creators */
  const RESET_SEARCH = searchActionTypes.RESET_SEARCH;

  return (
    <div>
      {console.log("NOT FOUND QUERY: ", params.food)}
      We don't have that yet.
    </div>
  );
}
