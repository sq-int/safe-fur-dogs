import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Content = styled(animated.div)`
    margin-top: 15%;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;