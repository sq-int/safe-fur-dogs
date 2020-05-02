import styled from 'styled-components';
import { animated } from 'react-spring';

export const FoodContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 10%;

    .row {
        width: 100%;
        display: flex;
        justify-content: space-around;

        .img-container {
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
    
            img {
                width: 100%;
                object-fit: contain;
            }
        }
    
        .food-info {
            width: 75%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2 {
                font-size: 3rem;
                margin-bottom: 2rem;
            }

            h4 {
                font-size: 7rem;
                font-weight: 900;
                line-height: 6rem;
            }

            .safe {
                color: #247d46;
            }

            .unsafe {
                color: #ff4f69;
            }
        }
    }
`;

export const FoodResult = styled(animated.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`;

export const Summary = styled.div`
    width: 100%;
    margin-top: 5rem;
    height: 5rem;
    padding: 0 10%;

    p {
        font-size: 2rem;
        line-height: 2.8rem;
    }
`;

export const ResourceList = styled.div`
    width: 100%;
    background: #ffffff;
    margin-top: 10rem;
    display: flex;
    flex-direction: column;

    h3 {
        padding: 10%;
        font-size: 3rem;
        line-height: 4rem;
        font-weight: 200;
        color: #444444;
    }
`;

export const ResourceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    margin-bottom: 10rem;
`;

export const Resource = styled.div`
    width: 100%;
    margin: 5rem 0 0;
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    &:first-child {
        margin-top: 0;
    }

    .img {
        width: 15%;
        padding-right: 1rem;
        border-right: 1px solid #C4C4C4;

        img {
            width: 100%;
            object-fit: contain;
        }
    }

    .content {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h5 {
            font-size: 2rem;
            font-weight: 200;
            line-height: 3rem;

            a {
                text-decoration: none;
                color: #444444;

                &:hover {
                    color: #111111;
                }
            }
        }
    }
`;