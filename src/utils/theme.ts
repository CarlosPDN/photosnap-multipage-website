import { css } from 'styled-components';

export const typography = {
    // H1/H2 (large); 40px; 48px line; 4.17 Character
    'H1/H2': css`
        font-family: 'DM Sans', sans-serif;
        font-size: 40px;
        line-height: 48px;
        width: 4.17ch;
    `,
    // H2; 24px; 25px line; 0 Character
    H2: css`
        font-family: 'DM Sans', sans-serif;
        font-size: 64px;
        line-height: 100%;
        font-weight: 700;
    `,
    // H3; 18px; 25px line; 0 Character
    H3: css`
        font-family: 'DM Sans', sans-serif;
        font-size: 18px;
        line-height: 25px;
    `,
    // H4; 12px; 16px line; 2 Character
    H4: css`
        font-family: 'DM Sans', sans-serif;
        font-size: 12px;
        line-height: 16px;
        width: 2ch;
    `,
    // Body; DM Sans Regular; 15px; 25px line; 0 Character
    Body: css`
        font-family: 'DM Sans', sans-serif;
        font-size: 15px;
        line-height: 25px;
        font-weight: 400;
    `,
};

export const lightTheme = {
    colors: {
        MainAccent: 'linear-gradient(135deg, #FFC593 0%, #BC7198 50%, #5A77FF 100%)',
        PureBlack: '#000000',
        PureWhite: '#FFFFFF',
        LightGrey: '#DFDFDF',
    },
    typography,
};
