import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/* actions */
import { searchActionTypes } from '../../actions/searchActions';

/* styles */
import { HeaderContainer } from '../../styles/header';

export default function Header() {

    /* bring in redux dispatch */
    const dispatch = useDispatch();

    /* action creators */
    const RESET_SEARCH = searchActionTypes.RESET_SEARCH;

    return (
        <HeaderContainer>
            <nav>
                <Link onClick={() => dispatch({ type: RESET_SEARCH })} to="/">Home</Link>
                <Link to="/food">Food</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </HeaderContainer>
    )
}
