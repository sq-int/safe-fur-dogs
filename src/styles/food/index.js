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
    margin-top: 5%;
`;

export const Summary = styled.div`
    width: 100%;
    margin: 10rem 0 2rem;
    height: 5rem;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        font-size: 2rem;
        line-height: 2.8rem;
        font-weight: 700;
    }
`;

export const ResourceList = styled.div`
    width: 100%;
    background: #ffffff;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;

    h3 {
        padding: 5% 10% 5rem;
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
        display: flex;
        align-items: center;

        @media (max-width: 700px) {
            display: none;
        }

        img {
            width: 100%;
            height: 8rem;
            object-fit: contain;
        }
    }

    .content {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 700px) {
            width: 100%;
        }

        h5 {
            font-size: 2rem;
            font-weight: 900;
            line-height: 3rem;
            margin-bottom: 1rem;

            a {
                text-decoration: none;
                color: #444444;

                &:hover {
                    color: #111111;
                }
            }
        }

        p {
            font-size: 1.6rem;
            line-height: 3.2rem;
            font-weight: 400;
        }

        .read-more {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            font-size: 1.4rem;
            line-heihgt: 2.4rem;
            font-weight: 900;
            margin-top: 2rem;

            a {
                text-decoration: none;
                color: #247d46;
            }
        }
    }
`;

export const Error = styled.div`
    width: 100%;
    border: 1px solid red;

    p {
        font-size: 2rem;
    }

    p.not-found {
        color: red;
    }
`;

export const ErrorButton = styled.button`
    background: #bfffe9;
    color: #444444;
    font-size: 1.4rem;
    font-weight: 200;
    line-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 300ms;

    &:hover {
        transition: background 300ms;
        cursor: pointer;
        background: #b4f0db;
    }
    
    &:focus {
        outline: 1px solid #C4C4C4;
    }
`;

export const FoodErrorContent = styled.p`
    font-size: 1.4rem;
    line-height: 3rem;
    color: #444444;
`;

export const FoodErrorTitle = styled.h4`
    font-size: 2rem;
    font-weight: 900;
    line-height: 3rem;
    color: #111111;
    padding: 2rem 0 0 2.2rem;
`;

export const AddFoodContainer = styled.div`
    width: 100%;
    margin-bottom: 5rem;

    h3 {
        font-size: 3rem;
        font-weight: 900;
        color: #444444;
        line-height: 4rem;
        margin-bottom: 2rem;
    }

    h4 {
        font-size: 2rem;
        font-weight: 700;
        color: #444444;
        line-height; 3.2rem;
        margin: 5rem 0 1rem;

        &:first-child {
            margin-top: 0;
        }
    }

    p {
        font-size: 1.6rem;
        font-weight: 200;
        line-height: 3.2rem;
        color: #111111;
        margin-bottom: 1rem;
    }

    input[type=text] {
        width: 50rem;
        height: 4rem;
        border: 1px solid #C4C4C4;
        border-radius: 0.5rem;
        font-size: 1.6rem;
        font-weight: 200;
        padding-left: 1rem;
        line-height: 3.2rem;

        &:focus {
            outline: 1px solid #8dc6f7;
        }
    }

    form {
        width: 100%;
        margin: 5rem 0;
        padding: 5%;
        background: #ffffff;
        border-radius: 0.5rem;

        button {
            width: 50rem;
            height: 5rem;
            font-size: 1.6rem;
            line-height: 3.2rem;
            font-weight: 900;
            border: none;
            border-radius: 0.5rem;
            background: #8dc6f7;
            margin: 3rem 0;
            color: #444444;
            transition: all 300ms;

            &:hover {
                cursor: pointer;
                transition: opacity 300ms;
                opacity: 0.8;
            }
        }

        .form-controls {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        /* Customize the label (the container) */
        .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin: 2rem 0 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    
        /* Hide the browser's default radio button */
        .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
    
        /* Create a custom radio button */
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 50%;
        }
    
        /* When the radio button is checked, add a blue background */
        .container input:checked ~ .checkmark {
            background-color: #8dc6f7;
        }
    
        /* Create the indicator (the dot/circle - hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
    
        /* Show the indicator (dot/circle) when checked */
        .container input:checked ~ .checkmark:after {
            display: block;
        }
    
        /* Style the indicator (dot/circle) */
        .container .checkmark:after {
            top: 9px;
            left: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #8dc6f7;
        }
    }
`;