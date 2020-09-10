import { animated } from 'react-spring';
import styled from 'styled-components';

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

export const DocContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
    padding: 0 10%;

    h3 {
        font-size: 3rem;
        margin: 5rem 0 1rem;
    }

    p {
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 3rem;
        margin-bottom: 2rem;
    }

    .last-updated {
        font-weight: 900;
    }

    a {
        color: #444444;
        font-weight: 700;
    }

    .go-back {
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
    }
`;