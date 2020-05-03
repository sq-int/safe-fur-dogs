import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSpring } from 'react-spring';

/* styles */
import { InnerContainer } from '../styles/global/structure';
import { FoodContainer, Summary, ResourceList, FoodResult, AddFoodContainer } from '../styles/food';

/* utils */
import { capitalizeString } from '../utils/strings';

/* components */
import References from './References';
import NotFound from './alerts/NotFound';
import AddFood from './AddFood';

export default function Food() {

    /* react-spring */
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    /* bring in state */
    const state = useSelector(state => state);

    /* application state for formatted food title */
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (state.food.length) {
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
                        <AddFoodContainer>
                            <AddFood />
                            <NotFound />
                        </AddFoodContainer>
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
