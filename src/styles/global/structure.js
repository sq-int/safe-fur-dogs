import { animated } from 'react-spring';
import styled from 'styled-components';

// general purpose container to be used for structural styling
export const Contain = styled(animated.div)`
    padding: ${props => props.padding ? `${props.padding}` : 'null'};
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
    width: ${props => props.width ? `${props.width}` : '100%'};
    height: ${props => props.height ? `${props.height}` : 'null'};
    display: ${props => props.display ? `${props.display}` : 'inline-block'};
    flex-direction: ${props => props.direction ? `${props.direction}` : 'row'};
    justify-content: ${props => props.justify ? `${props.justify}` : 'flex-start'};
    align-items: ${props => props.align ? `${props.align}` : 'flex-start'};
`

// general purpose content block to be used for structural styling
export const Block = styled.div`
    width: ${props => props.width ? `${props.width}` : '100%'};
    height: ${props => props.height ? `${props.height}` : 'null'};
    display: ${props => props.display ? `${props.display}` : 'inline-block'};
    flex-direction: ${props => props.direction ? `${props.direction}` : 'row'};
    justify-content: ${props => props.justify ? `${props.justify}` : 'flex-start'};
    align-items: ${props => props.align ? `${props.align}` : 'flex-start'};
    padding: ${props => props.padding ? `${props.padding}` : 'null'};
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
`

export const Container = styled(animated.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    p.error {
        color: red;
        margin: 1rem 0;
    }
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

    div.search-preview {
        margin-top: 1.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        height: 10rem;
        text-align: center;

        p {
            width: 70rem;
            font-size: 3rem;
            color: #24767A;

            @media (max-width: 700px) {
                width: 50rem;
            }

            @media (max-width: 500px) {
                font-size: 2.5rem;
                width: 30rem;
            }
        }
    }
`;

export const InnerContainer = styled.div`
    width: 100%;
`;

// container housing links to documentation
export const DocContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 3rem;
        margin-bottom: 2rem;
    }

    a {
        color: #444444;
        font-weight: 700;
    }
`;

export const GoBack = styled.div`
    margin-bottom: 3rem;
    width: 100%;
    display: flex;
    justfiy-content: flex-start;

    .arrow {
        width: 10%;

        img {
            width: 100%;
            height: 4rem;
            object-fit: contain;

            &:hover {
                cursor: pointer;
            }
        }
    }
`

export const DocTitle = styled.h3`
    font-size: 2.6rem;
    padding: ${props => props.padding ? `${props.padding}` : 'null'};
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
    color: ${props => props.color ? `${props.color}` : '#000000'};
`