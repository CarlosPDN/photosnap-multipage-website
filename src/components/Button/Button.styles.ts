import styled, { css } from 'styled-components';
import { lightTheme } from '@/utils/theme';

export type ButtonType = 'button1' | 'button2' | 'button3' | 'button4' | 'button5';

const buttonStyles: Record<ButtonType, ReturnType<typeof css>> = {
    button1: css`
        color: ${lightTheme.colors.PureWhite} !important;
        background-color: ${lightTheme.colors.PureBlack} !important;

        &:hover {
            background-color: ${lightTheme.colors.LightGrey} !important;
            color: ${lightTheme.colors.PureBlack} !important;
        }
    `,
    button2: css`
        color: ${lightTheme.colors.PureBlack};
        background-color: transparent;

        display: flex;
        justify-content: space-between;

        &:hover {
            text-decoration: underline;
        }
    `,
    button3: css`
        color: ${lightTheme.colors.PureBlack};
        background-color: ${lightTheme.colors.PureWhite};

        &:hover {
            background-color: ${lightTheme.colors.LightGrey};
            color: ${lightTheme.colors.PureBlack};
        }
    `,
    button4: css`
        color: ${lightTheme.colors.PureWhite};
        background-color: transparent;

        display: flex;
        justify-content: space-between;

        &:hover {
            text-decoration: underline;
        }
    `,
    button5: css`
        color: ${lightTheme.colors.PureBlack};
        background-color: transparent;

        display: flex;

        &:hover,
        &:active {
            color: ${lightTheme.colors.LightGrey};
        }
    `,
};

export const ButtonWrapper = styled.div<{ $type: ButtonType }>`
    max-width: auto;
    width: 100%;
    height: 100%;
    .button {
        font-weight: 700;
        letter-spacing: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer !important;
        outline: none;
        border: none;
        width: 100%;
        height: 100%;

        ${({ $type }) => buttonStyles[$type]}
        &__label {
            white-space: nowrap;

            cursor: pointer;
        }
    }
`;
