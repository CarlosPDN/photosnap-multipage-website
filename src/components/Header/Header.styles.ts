import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 72px;
    width: 100%;
    background-color: white;
    align-items: center;

    .left {
        display: flex;
        font-weight: 700;

        &__label {
            margin-left: 4px;
        }
    }
    .center {
        display: flex;
    }
    .right {
        width: 158px;

        &__button {
            height: 40px;
        }
    }
`;

export default HeaderWrapper;
