import styled from 'styled-components';
import { animated } from 'react-spring';

export const MainHeading = styled.h1`
    font-size: 6rem;
    font-weight: 900;

    @media (max-width: 550px) {
        font-size: 5rem;
    }

    @media (max-width: 400px) {
        font-size: 4rem;
    }
`;

export const SecondaryHeading = styled.h2`
    font-size: 4rem;
    line-height: 5rem;
    font-weight: 900;
    margin: 1rem 0 3rem;
`;

export const SearchLoadingMessage = styled(animated.p)`
    margin-top: 5rem;
    font-size: 4rem;
    font-weight: 900;
    line-height: 5rem;
    color: #444444;
`;

