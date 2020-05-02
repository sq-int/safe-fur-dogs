import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';

/* styles */
import { Content, InnerContainer } from '../styles/global/structure';
import { FoodContainer, Summary, ResourceList, FoodResult } from '../styles/food';

/* utils */
import { capitalizeString } from '../utils/strings';

/* components */
import References from './References';

export default function Food() {

    /* react-spring */
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    /* bring in state */
    const state = useSelector(state => state);

    /* params, history, location */
    const params = useParams();
    const location = useLocation();

    /* application state for formatted food title */
    const [title, setTitle] = useState('');

    // if(state) {
    //     useEffect(() => {
    //         setTitle(capitalizeString(state.food[0].food))
    //     }, []);
    // }

    useEffect(() => {
        if(state.food.length) {
            setTitle(capitalizeString(state.food[0].food));
        }
    }, [state]);

    return (
        <FoodResult style={props}>
            {console.log(state)}
            <InnerContainer>
                <FoodContainer>
                    {state.food !== undefined && state.food.length > 0 &&
                    <div className="row">
                        <div className="img-container">
                            <img src={state.food[0].img} alt='Food' />
                        </div>
                        <div className="food-info">
                            <h2>{title}</h2>
                            {state.food[0].safe === true && <h4 className="safe">Safe</h4>}
                            {state.food[0].safe === false && <h4 className="unsafe">Not Safe</h4>}
                        </div>
                    </div>}

                    {state.food === undefined || state.food.length === 0 &&
                        <div className="error">
                            <p>Unfortunately that food is not yet in our database.</p>
                            <p>Would you like to help add it?</p>
                        </div>
                    }
                </FoodContainer>

                {state.food !== undefined && state.food.length > 0 &&
                <Summary>
                    <p>{state.food[0].summary}</p>
                </Summary>}
            </InnerContainer>

            {state.food !== undefined && state.food.length > 0 &&
            <ResourceList>
                <h3>Helpful Resources</h3>
                <References resources={state.food[0].resources} />
            </ResourceList>}
        </FoodResult>
    )
}
