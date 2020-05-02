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
    margin-top: 20%;
`;

export const InnerContainer = styled.div`
    width: 100%;
`;