import styled from 'styled-components';

const BigDisplayWrapper = styled.div`
    color: white;
    height: 650px;
    width: 100%;
    .display-data {
        background-color: black;
        width: 40%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &__area {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 304px;
            width: 387px;
            &__button {
                width: 170px;
            }
        }
    }
`;

export default BigDisplayWrapper;
