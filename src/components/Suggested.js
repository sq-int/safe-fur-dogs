import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSpring } from "react-spring";

import { SuggestionContainer, FoodSuggestion } from "../styles/suggestions";
import { SecondaryHeading } from "../styles/global/type";

/* actions */
import { searchActionCreators } from "../redux/actions";

export default function Suggested() {
  /* react-spring */
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  /* useHistory */
  const history = useHistory();

  /* redux config */
  const dispatch = useDispatch();
  const state = useSelector((state) => state.searchReducer);

  /* action creators */
  const searchItem = searchActionCreators.searchItem;

  /* send user to top of page on render */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [state]);

  return (
    <SuggestionContainer style={props}>
      <SecondaryHeading>What were you searching for?</SecondaryHeading>

      {state.suggestions !== undefined &&
        state.suggestions.length !== 0 &&
        state.suggestions.map((s, idx) => {
          return (
            <FoodSuggestion key={idx}>
              <div className="food-icon">
                <img src={s.img} alt={s.name} />
              </div>
              <div className="food-info">
                <h4
                  onClick={() => {
                    dispatch(
                      searchItem(s.name, (path) => history.push(`/${path}`))
                    );
                  }}
                >
                  {s.name}
                </h4>
                {s.safe === true && <p className="safe">Safe</p>}
                {s.safe === false && <p className="unsafe">Not Safe</p>}
                <p>{s.summary}</p>
              </div>
            </FoodSuggestion>
          );
        })}
    </SuggestionContainer>
  );
}
