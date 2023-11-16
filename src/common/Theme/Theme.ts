// @Theme
import { breakpoints } from "./Breakpoints";
import { accentColors, palette } from './Palette';
import { spacing } from './Spacing';
import { sizing } from './Sizing';

// @Types
import { ThemeType } from './Theme.types';
import { getTypography } from './Typography.styles';

const getTheme = (
  routeOrder: number,
  colorTheme: 'dark' | 'light',
): ThemeType => {
  return {
    breakpoints,
    typography: getTypography(colorTheme),
    palette: {
      ...palette[colorTheme],
      accents: accentColors[routeOrder % 3],
    },
    sizing,
    spacing,
  };
};

export default getTheme;
