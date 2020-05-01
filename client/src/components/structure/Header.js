import React from 'react';
import { Link } from 'react-router-dom';

/* styles */
import { HeaderContainer } from '../../styles/header';

export default function Header() {
    return (
        <HeaderContainer>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/food">Food</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </HeaderContainer>
    )
}
