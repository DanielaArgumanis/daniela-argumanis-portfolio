import { palette } from "./Palette";

const fontSizes = {
    xsmall: '0.75rem', //12
    small: '0.875rem', // 14
    medium: '1rem', // 16
    standard: '1.063rem', // 17
    large: '1.125rem', // 18
    xlarge: '1.25rem', // 20
    xxlarge: '1.5rem', // 24
};
  
export const typography = {
    'label': {
        fontSize: fontSizes.medium,
        fontWeight: 700,
        color: palette.white,
    },
    'body1': {
        fontSize: fontSizes.large,
        color: palette.text,
    },
    'body2': {
        fontSize: fontSizes.medium,
        color: palette.text,
    },
}