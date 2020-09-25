import styled from 'styled-components';
import { animated } from 'react-spring';

// building out reusable styles
export const HeadTwo = styled.h2`
    padding: ${props => props.padding ? `${props.padding}` : 'null'};
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
    font-size: ${props => props.fontSize ? `${props.fontSize}` : '1rem'};
    font-weight: ${props => props.fontWeight ? `${props.fontWeight}` : 'normal'};
    color: ${props => props.color ? `${props.color}` : '#000000'};
`

export const HeadThree = styled.h3`
    padding: ${props => props.padding ? `${props.padding}` : 'null'};
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
    font-size: ${props => props.fontSize ? `${props.fontSize}` : '1rem'};
    font-weight: ${props => props.fontWeight ? `${props.fontWeight}` : 'normal'};
    color: ${props => props.color ? `${props.color}` : '#000000'};
`

export const HeadFour = styled.h4`
    padding: ${props => props.padding ? `${props.padding}` : 'null'};
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
    font-size: ${props => props.fontSize ? `${props.fontSize}` : '1rem'};
    font-weight: ${props => props.fontWeight ? `${props.fontWeight}` : 'normal'};
    color: ${props => props.color ? `${props.color}` : '#000000'};
`

export const Paragraph = styled.p`
    padding: ${props => props.padding ? `${props.padding}` : 'null'};
    margin: ${props => props.margin ? `${props.margin}` : 'null'};
    font-size: ${props => props.fontSize ? `${props.fontSize}` : '1rem'};
    font-weight: ${props => props.fontWeight ? `${props.fontWeight}` : 'normal'};
    color: ${props => props.color ? `${props.color}` : '#000000'};
    line-height: ${props => props.lineHeight ? `${props.lineHeight}` : 'null'};
    text-align: ${props => props.textAlign ? `${props.textAlign}` : 'left'};
`

// old styling below
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

