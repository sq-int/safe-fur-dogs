import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

/* styles */
import { Content } from '../styles/global/structure';
import { FoodContainer } from '../styles/food';

/* temp assets */
import Eggs from '../assets/food/Eggs.svg';

export default function Food() {

    /* bring in state */
    const food = useSelector(state => state.searchReducer);

    /* params, history, location */
    const params = useParams();
    const location = useLocation();
    
    return (
        <Content>
            <FoodContainer>
                {/* {console.log('our food from state ', food.food[0].food)} */}
                <h2>{food.food[0].food}</h2>
                <div className="img-container">
                    <img src={Eggs} alt='Eggs' />
                </div>
                <div className="food-info">

                </div>
            </FoodContainer>
        </Content>
    )
}
