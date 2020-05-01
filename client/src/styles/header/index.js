import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;

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