import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSpring } from "react-spring";
import { useHistory } from "react-router-dom";

/* styles */
import { InnerContainer } from "../styles/global/structure";
import {
  FoodContainer,
  Summary,
  ResourceList,
  FoodResult,
} from "../styles/food";

/* utils */
import { capitalizeString } from "../utils/strings";

/* components */
import References from "./References";

/* assets */
import Back from "../assets/Back.svg";

export default function Food() {
  /* useHistory configuration */
  const history = useHistory();

  /* react-spring */
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  /* bring in state and dispatch*/
  const state = useSelector((state) => state.searchReducer);

  /* application state for formatted food title */
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (state.food) {
      setTitle(capitalizeString(state.food.name));
    }
  }, [state]);

  return (
    <FoodResult style={props}>
      <div className="go-back">
        <div className="arrow">
          <img
            onClick={() => {
              history.goBack();
            }}
            src={Back}
            alt="Go Back"
          />
        </div>
      </div>
      <InnerContainer>
        <FoodContainer>
          {state.food !== undefined && (
            <div className="row">
              <div className="img-container">
                <img src={state.food.img} alt="Food" />
              </div>
              <div className="food-info">
                <h2>{title}</h2>
                {state.food.safe === true && <h4 className="safe">Safe</h4>}
                {state.food.safe === false && (
                  <h4 className="unsafe">Not Safe</h4>
                )}
              </div>
            </div>
          )}
        </FoodContainer>

        {state.food !== undefined && (
          <Summary>
            <p>{state.food.summary}</p>
          </Summary>
        )}
      </InnerContainer>

      {state.food !== undefined && (
        <ResourceList>
          <h3>Helpful Resources</h3>
          <References resources={state.food.resources} />
        </ResourceList>
      )}
    </FoodResult>
  );
}
