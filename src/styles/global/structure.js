import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
    width: 100%;
    // max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

export const SearchBox = styled(animated.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20% 0 20%;

    .error {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #ff4a4a;
        font-weight: 200;
        font-size: 1.4rem;
    }
`;

export const InnerContainer = styled.div`
    width: 100%;
`;