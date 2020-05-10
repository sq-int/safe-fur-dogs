import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SuggestionContainer, FoodSuggestion } from '../styles/suggestions';
import { SecondaryHeading } from '../styles/global/type';

/* actions */
import { searchActionCreators } from '../actions';

export default function Suggested() {

    /* useHistory */
    const history = useHistory();

    /* redux config */
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    
    /* action creators */
    const searchItem = searchActionCreators.searchItem;

    return (
        <SuggestionContainer>
            {console.log(`CURRENT STATE IN SUGGESTIONS COMPONENT `, state)}

            <SecondaryHeading>What were you searching for?</SecondaryHeading>

            {state.suggestions !== undefined && state.suggestions.length !== 0 && 
                state.suggestions.map((s, idx) => {
                    return (
                        <FoodSuggestion key={idx}>
                            <div className="food-icon">
                                <img src={s.img} alt={s.food} />
                            </div>
                            <div className="food-info">
                                <h4 onClick={() => {
                                        dispatch(searchItem(s.food, (path) => history.push(`/${path}`)));
                                }}>{s.food}</h4>
                                {s.safe === true && <p className="safe">Safe</p>}
                                {s.safe === false && <p className="unsafe">Not Safe</p>}
                                <p>{s.summary}</p>
                            </div>
                        </FoodSuggestion>
                    )
                }) 
            }
        </SuggestionContainer>
    )
}
