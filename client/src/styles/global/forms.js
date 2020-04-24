import styled from 'styled-components';

export const MainSearch = styled.form`
    margin: 2rem 0;
    width: 50%;
    display: flex;

    input[type=text] {
        width: 90%;
        height: 5rem;
        border: none;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        padding-left: 1rem;
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.2rem;

        &:focus {
            outline: 1px solid #C4C4C4;
        }
    }

    button {
        width: 10%;
        height: 5rem;
        border: none;
        background: #C4C4C4;
        border-bottom-right-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &:focus {
            outline: 1px solid #C4C4C4;
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
        }

        img {
            height: 3rem;
            width: 100%;
        }
    }
`;