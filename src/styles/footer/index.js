import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10rem;
    position: fixed;
    bottom: 0;

    a {
        color: #444444;
        text-decoration: none;
        font-size: 1.4rem;
        font-weight: 200;

        &:hover {
            color: #111111;
        }
    }
`;