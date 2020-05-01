import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useSpring, animated } from 'react-spring';

/* styles */
import { Content } from '../styles/global/structure';
import { FoodContainer } from '../styles/food';

/* utils */
import { capitalizeString } from '../utils/strings';

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

    useEffect(() => {
        setTitle(capitalizeString(state.food[0].food));
    }, [state]);

    return (
        <Content style={props}>
            <FoodContainer>
                <div className="row">
                    <div className="img-container">
                        <img src={state.food[0].img} alt='Food' />
                    </div>
                    <div className="food-info">
                        {/* <h2>{state.food[0].food}</h2> */}
                        <h2>{title}</h2>
                        {state.food[0].safe === true && <h4 className="safe">Safe</h4>}
                        {state.food[0].safe === false && <h4 className="unsafe">Not Safe</h4>}
                    </div>

                </div>
            </FoodContainer>
        </Content>
    )
}
