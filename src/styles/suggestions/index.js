import styled from 'styled-components';

export const SuggestionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    margin: 5rem 0;
`;

export const FoodSuggestion = styled.div`
    width: 100%;
    display: flex;
    margin: 2.5rem 0;

    .food-icon {
        width: 10%;
        display: flex;
        align-items: center;
        border-right: 1px solid #444444;

        img {
            width: 100%;
            height: 6rem;
            object-fit: contain;
        }
    }

    .food-info {
        width: 75%;
        margin-left: 3rem;

        h4 {
            font-size: 3rem;
            line-height: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;

            &:hover {
                color: #111111;
                cursor: pointer;
            }
        }

        .safe {
            color: green;
            font-size: 1.8rem;
            font-weight: 900;
        }

        .unsafe {
            color: red;
            font-size: 1.8rem;
            font-weight: 900;
        }

        p {
            font-size: 1.6rem;
            line-height: 2.6rem;
            margin-bottom: 1rem;
        }
    }
`;