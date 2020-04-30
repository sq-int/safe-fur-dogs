import styled from 'styled-components';

export const FoodContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

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
                // color: #455c54;
                color: #247d46;
            }

            .unsafe {
                color: #ff4f69;
            }
        }
    }
`;