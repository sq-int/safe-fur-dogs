import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .coffee {
        width: 20%;
        height: 7rem;
        display: flex;
        align-items: center;
        margin-left: 5%;

        @media (max-width: 700px) {
            width: 30%;
            justify-content: space-evenly;
        }

        @media (max-width: 550px) {
            width: 40%;
        }

        @media (max-width: 450px) {
            width: 50%;
        }

        img {
            width: 100%;
            height: 3rem;
            object-fit: contain;
        }
    }

    nav {
        width: 50%;
        display: flex;
        justify-content: space-evenly;

        a {
            text-decoration: none;
            color: #444444;
            font-size: 2rem;
            line-height: 2.5rem;
            transition: all 300ms;
            font-weight: 900;

            &:hover {
                transition: color 300ms;
                color: #111111;
            }
        }
    }
`;